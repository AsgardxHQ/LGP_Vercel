<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { siteFlowConfig } from '../../utils/site-taxonomy'
import { pathForPageName } from '../../utils/page-flow'
import { useFlowAnswers } from '../../utils/usePageFlow'
import { isValidEmail, isValidFullName, isValidUsPhone, isValidZipcode, normalizeFullName } from '#shared-utils/form-validation'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const router = useRouter()
const answers = useFlowAnswers()
const currentIndex = ref(0)
const draftValue = ref('')
const draftEmail = ref('')
const draftPhone = ref('')
const formError = ref('')
const inputElement = ref<HTMLInputElement | null>(null)

const questions = siteFlowConfig.questions.filter((question) => question.id !== 'phone')
const totalSteps = questions.length

const answerKeyForQuestion = (questionId: string) => {
  if (questionId === 'categories') return 'category'
  if (questionId === 'subcategories') return 'subcategory'
  if (questionId === 'fullname') return 'fullName'
  return questionId
}

const answerKey = computed(() => {
  const question = questions[currentIndex.value]
  return question ? answerKeyForQuestion(question.id) : undefined
})

const currentQuestion = computed(() => questions[currentIndex.value])
const questionTitle = computed(() => currentIndex.value === 0
  ? 'Let’s get started by finding you a pro near you'
  : currentQuestion.value?.id === 'email'
    ? 'How can we reach you?'
  : currentQuestion.value?.label ?? '')
const currentAnswer = computed(() => {
  const key = answerKey.value as keyof typeof answers.value | undefined
  return key ? answers.value[key] : ''
})

const categoryOptions = computed(() => siteFlowConfig.categories.map((category) => category.name))
const currentOptions = computed(() => {
  if (currentQuestion.value?.id === 'categories') return categoryOptions.value
  if (currentQuestion.value?.id === 'subcategories') {
    const category = siteFlowConfig.categories.find((item) => item.name === answers.value.category)
    return category?.subcategories ?? []
  }
  return currentQuestion.value?.options ?? []
})

const answered = (index: number) => {
  const question = questions[index]
  if (!question) return true
  if (question.id === 'email') {
    return answers.value.email.trim().length > 0 && answers.value.phone.trim().length > 0
  }
  const key = answerKeyForQuestion(question.id)
  return String(answers.value[key as keyof typeof answers.value] ?? '').trim().length > 0
}

const nextUnansweredIndex = (start: number) => {
  for (let index = start; index < questions.length; index += 1) {
    if (answered(index) === false) return index
  }
  return questions.length
}

const syncQuestion = async () => {
  const nextIndex = nextUnansweredIndex(currentIndex.value)
  if (nextIndex >= questions.length) {
    await finish()
    return
  }

  currentIndex.value = nextIndex
  draftValue.value = String(currentAnswer.value ?? '')
  draftEmail.value = answers.value.email
  draftPhone.value = answers.value.phone
  formError.value = ''
  await nextTick()
  inputElement.value?.focus()
}

const choose = (value: string) => {
  draftValue.value = value
  submit()
}

const goBack = async () => {
  if (currentIndex.value <= 0) return
  currentIndex.value -= 1
  draftValue.value = String(currentAnswer.value ?? '')
  draftEmail.value = answers.value.email
  draftPhone.value = answers.value.phone
  formError.value = ''
  await nextTick()
  inputElement.value?.focus()
}

const submit = async () => {
  if (currentQuestion.value?.id === 'email') {
    const email = draftEmail.value.trim()
    const phone = draftPhone.value.trim()
    if (!isValidEmail(email)) {
      formError.value = 'Enter a valid email address.'
      return
    }
    if (!isValidUsPhone(phone)) {
      formError.value = 'Enter a valid phone number.'
      return
    }
    answers.value.email = email
    answers.value.phone = phone
    formError.value = ''
    currentIndex.value += 1
    await syncQuestion()
    return
  }

  let value = draftValue.value.trim()
  if (!value || !answerKey.value) return

  if (currentQuestion.value?.id === 'zipcode' && !isValidZipcode(value)) {
    formError.value = 'Enter a 5-digit ZIP code.'
    return
  }
  if (currentQuestion.value?.id === 'fullname') {
    value = normalizeFullName(value)
    if (!isValidFullName(value)) {
      formError.value = 'Enter your first and last name.'
      return
    }
  }

  const key = answerKey.value as keyof typeof answers.value
  answers.value[key] = value
  if (key === 'category') {
    const category = siteFlowConfig.categories.find((item) => item.name === value)
    answers.value.categoryId = category?.id ?? ''
    answers.value.subcategory = ''
  }

  formError.value = ''
  currentIndex.value += 1
  await syncQuestion()
}

const finish = async () => {
  emit('close')
  await router.push(pathForPageName('thank_you', answers.value))
}

const close = () => emit('close')

watch(() => props.open, (isOpen) => {
  if (isOpen) {
    currentIndex.value = nextUnansweredIndex(0)
    draftValue.value = ''
    draftEmail.value = answers.value.email
    draftPhone.value = answers.value.phone
    formError.value = ''
    syncQuestion()
  }
})

watch(currentAnswer, (value) => {
  if (props.open) draftValue.value = String(value ?? '')
})
</script>

<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/55 px-4 py-[50px]" role="dialog" aria-modal="true" :aria-labelledby="'question-modal-title'">
    <div class="relative flex min-h-[600px] w-full max-w-[650px] flex-col bg-white px-6 py-7 shadow-2xl sm:px-10 sm:py-10">
      <button class="absolute right-5 top-4 text-2xl leading-none text-black/45 transition hover:text-black" type="button" aria-label="Close" @click="close">&times;</button>

      <div class="flex items-center gap-3 pr-8">
        <span class="text-xs font-bold text-[#2361a8]">{{ Math.round(((currentIndex + 1) / totalSteps) * 100) }}%</span>
        <div class="h-[5px] flex-1 overflow-hidden bg-[#e8e9e5]">
          <div class="h-full bg-[var(--cc-yellow)] transition-all duration-300" :style="{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }" />
        </div>
      </div>

      <div v-if="currentQuestion" class="flex flex-1 flex-col pt-8">
        <h2 id="question-modal-title" class="max-w-[560px] text-2xl font-bold leading-[1.12] sm:text-[25px]">{{ questionTitle }}</h2>

        <form class="mt-10 flex flex-1 flex-col" @submit.prevent="submit">
          <div v-if="currentQuestion.id === 'email'" class="grid gap-3">
            <input
              v-model="draftEmail"
              class="w-full border border-[#d6d7d3] rounded px-3 py-4 text-sm outline-none placeholder:text-[#777b76] focus:border-[#2361a8]"
              type="email"
              placeholder="Email address"
              autocomplete="email"
              required
            >
            <input
              v-model="draftPhone"
              class="w-full border border-[#d6d7d3] rounded px-3 py-4 text-sm outline-none placeholder:text-[#777b76] focus:border-[#2361a8]"
              type="tel"
              placeholder="Phone number"
              autocomplete="tel"
              required
            >
          </div>
          <div v-else-if="currentOptions.length" class="grid max-h-[360px] gap-3 overflow-y-auto pr-1" role="radiogroup">
            <label
              v-for="option in currentOptions"
              :key="option"
              class="flex cursor-pointer items-center gap-3 rounded border px-4 py-4 text-sm transition"
              :class="draftValue === option ? 'border-[#2361a8] bg-[#eaf2fb]' : 'border-[#d6d7d3] hover:border-[#2361a8]'"
            >
              <input v-model="draftValue" type="radio" class="peer sr-only" :value="option" name="question-option" required>
              <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#a9adA5] peer-checked:border-[#2361a8]">
                <span v-if="draftValue === option" class="h-2 w-2 rounded-full bg-[#2361a8]" />
              </span>
              {{ option }}
            </label>
          </div>
          <input
            v-else
            ref="inputElement"
            v-model="draftValue"
            class="w-full border border-[#d6d7d3] rounded px-3 py-4 text-sm outline-none placeholder:text-[#777b76] focus:border-[#2361a8]"
            :type="currentQuestion.id === 'phone' ? 'tel' : 'text'"
            :placeholder="currentQuestion.label"
            required
          >

          <p v-if="formError" class="mt-3 text-xs font-semibold text-red-600">{{ formError }}</p>

          <div class="mt-auto flex items-center justify-end gap-3 pt-8">
            <button v-if="currentIndex > 0" class="px-5 py-4 text-center text-xs border rounded font-bold text-[var(--cc-charcoal)] transition cursor-pointer" type="button" @click="goBack">
              <span class="text-base leading-none">&larr;</span>
            </button>
            <button class="bg-[var(--cc-yellow)] px-5 py-4 rounded text-xs font-bold text-[var(--cc-charcoal)] transition cursor-pointer hover:bg-[#f7c900] disabled:cursor-not-allowed disabled:opacity-50" type="submit" :disabled="currentQuestion.id === 'email' ? draftEmail.trim().length === 0 || draftPhone.trim().length === 0 : draftValue.trim().length === 0">
              Continue <span class="ml-3 text-base leading-none">&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
