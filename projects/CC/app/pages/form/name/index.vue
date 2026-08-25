<script setup lang="ts">
import { ref } from 'vue';
import { isValidFullName, normalizeFullName } from '@/utils';

const answers = useFlowAnswers();
const { goNext, goPrevious } = usePageFlow('fullname');
const error = ref('');

const submit = () => {
  const fullName = normalizeFullName(answers.value.fullName);
  if (!isValidFullName(fullName)) {
    error.value = 'Enter your first and last name.';
    return;
  }
  answers.value.fullName = fullName;
  error.value = '';
  goNext();
};
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-8 sm:py-14">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">What is your full name?</h1>

    <form class="mt-6 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200" @submit.prevent="submit">
      <label class="block">
        <span class="mb-2 block text-lg font-medium text-gray-900">Full name</span>
        <input
          v-model="answers.fullName"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          type="text"
          autocomplete="name"
          pattern="[A-Za-z]+([ '-][A-Za-z]+)+"
          required
        >
        <p v-if="error" class="mt-2 text-sm text-red-600" role="alert">{{ error }}</p>
      </label>
      <div class="flex gap-4">
        <button class="flex-1 rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:border-gray-400" type="button" @click="goPrevious">
          Back
        </button>
        <button class="flex-1 rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800" type="submit">
          Continue
        </button>
      </div>
    </form>
  </section>
</template>
