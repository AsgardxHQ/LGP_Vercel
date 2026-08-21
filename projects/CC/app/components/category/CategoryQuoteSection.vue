<script setup lang="ts">
import { ref } from 'vue';
import type { CategoryContent } from '../../utils/category-content';
import { fallbackImage } from '../../utils/category-content';
import { useTaxonomyRoute } from '../../composables/useTaxonomyRoute';
import { useFlowAnswers } from '../../utils/usePageFlow';
import { isValidEmail, isValidFullName, isValidZipcode, normalizeFullName } from '../../utils/form-validation';

defineProps<{ content: CategoryContent }>();

const answers = useFlowAnswers();
const { category } = useTaxonomyRoute();
const imageFailed = ref(false);
const questionModalOpen = ref(false);
const formError = ref('');

const bullets = ['100% free to get started', 'No obligations, cancel anytime', 'Trusted and vetted contractors only'];

const submit = () => {
  if (!category.value || !answers.value.subcategory) return;
  const fullName = normalizeFullName(answers.value.fullName);
  const email = answers.value.email.trim();
  const zipcode = answers.value.zipcode.trim();

  if (!isValidFullName(fullName)) {
    formError.value = 'Enter your first and last name.';
    return;
  }
  if (!isValidEmail(email)) {
    formError.value = 'Enter a valid email address.';
    return;
  }
  if (!isValidZipcode(zipcode)) {
    formError.value = 'Enter a 5-digit ZIP code.';
    return;
  }

  answers.value.category = category.value.name;
  answers.value.categoryId = category.value.id;
  answers.value.fullName = fullName;
  answers.value.email = email;
  answers.value.zipcode = zipcode;
  formError.value = '';
  questionModalOpen.value = true;
};
</script>

<template>
  <section id="category-quote" class="cc-section bg-[#f4f3f0] py-16 md:py-20">
    <div class="cc-container grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
      <div>
        <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2574c]">Get started today</p>
        <h2 class="mt-3 max-w-md text-3xl font-bold leading-tight md:text-4xl">{{ content.quoteTitle }}</h2>
        <p class="mt-4 max-w-md text-sm text-[var(--cc-ink-soft)]">
          Get matched with trusted contractors in your area today. Free, fast, and no obligations.
        </p>

        <ul class="mt-6 space-y-3 text-sm text-[var(--cc-ink-soft)]">
          <li v-for="bullet in bullets" :key="bullet" class="flex items-center gap-2.5">
            <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--cc-brand-blue)]/10 text-[var(--cc-brand-blue)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-3 w-3" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            {{ bullet }}
          </li>
        </ul>
      </div>

      <div class="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(17,22,33,0.1)]">
        <h3 class="text-center text-lg font-bold">Get your free quotes</h3>

        <form class="mt-5 grid gap-4" @submit.prevent="submit">
          <label class="grid gap-1.5">
            <span class="text-xs font-semibold text-[var(--cc-ink-soft)]">Project type</span>
            <select
              v-model="answers.subcategory"
              required
              class="rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none transition focus:border-[var(--cc-brand-blue)]"
            >
              <option disabled value="">Select your project type</option>
              <option v-for="subcategory in category?.subcategories ?? []" :key="subcategory" :value="subcategory">
                {{ subcategory }}
              </option>
            </select>
          </label>

          <label class="grid gap-1.5">
            <span class="text-xs font-semibold text-[var(--cc-ink-soft)]">Full name</span>
            <input
              v-model="answers.fullName"
              type="text"
              autocomplete="name"
              required
              class="rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none transition focus:border-[var(--cc-brand-blue)]"
            />
          </label>

          <label class="grid gap-1.5">
            <span class="text-xs font-semibold text-[var(--cc-ink-soft)]">Email address</span>
            <input
              v-model="answers.email"
              type="email"
              autocomplete="email"
              required
              class="rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none transition focus:border-[var(--cc-brand-blue)]"
            />
          </label>

          <label class="grid gap-1.5">
            <span class="text-xs font-semibold text-[var(--cc-ink-soft)]">Zip code</span>
            <input
              v-model="answers.zipcode"
              type="text"
              inputmode="numeric"
              autocomplete="postal-code"
              placeholder="E.g. 90210"
              pattern="[0-9]{5}"
              maxlength="5"
              required
              class="rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none transition focus:border-[var(--cc-brand-blue)]"
            />
          </label>

          <p v-if="formError" class="text-sm text-red-600" role="alert">{{ formError }}</p>

          <button
            type="submit"
            class="mt-1 flex items-center justify-center gap-2 rounded-lg bg-[var(--cc-yellow)] px-4 py-3 text-sm font-semibold text-[var(--cc-charcoal)] transition hover:bg-[#ffca0d]"
          >
            Get a quote
            <span aria-hidden="true">&rarr;</span>
          </button>
        </form>

        <p class="mt-3 text-center text-[10px] leading-relaxed text-black/45">
          By submitting you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>

    <img
      :src="imageFailed ? fallbackImage : content.bandImage"
      :alt="content.noun"
      class="mt-14 h-[240px] w-full object-cover md:h-[340px]"
      @error="imageFailed = true"
    />

    <LandingQuestionModal :open="questionModalOpen" @close="questionModalOpen = false" />
  </section>
</template>
