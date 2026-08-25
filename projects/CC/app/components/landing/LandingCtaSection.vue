<script setup lang="ts">
import { ref } from 'vue';
import { siteTaxonomy } from '../../utils/page-flow';
import { useFlowAnswers } from '../../utils/usePageFlow';
import { useCategorySelection } from '../../composables/useCategorySelection';
import { isValidZipcode } from '@/utils';

const answers = useFlowAnswers();
const { selectCategory } = useCategorySelection();
const zipcodeError = ref('');

const submit = async () => {
  if (answers.value.category.trim().length === 0) return;
  const zipcode = answers.value.zipcode.trim();
  if (!isValidZipcode(zipcode)) {
    zipcodeError.value = 'Enter a 5-digit ZIP code.';
    return;
  }
  answers.value.zipcode = zipcode;
  zipcodeError.value = '';
  await selectCategory(answers.value.category);
};
</script>

<template>
  <section id="get-started" class="cc-section bg-[var(--cc-charcoal)] py-16 text-white md:py-20">
    <div class="cc-container grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-center">
      <div>
        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--cc-yellow)]">Get started today</p>
        <h2 class="max-w-lg text-3xl font-bold leading-tight md:text-5xl">Your next home project starts here</h2>
        <p class="mt-4 max-w-xl text-sm text-white/75 md:text-base">Get matched with trusted contractors in your area, compare estimates, and hire with confidence.</p>
        <ul class="mt-6 space-y-2 text-sm text-white/85">
          <li>100% free to get started</li>
          <li>No obligations, cancel anytime</li>
          <li>Trusted and vetted professionals only</li>
        </ul>
      </div>

      <div class="rounded-2xl border border-white/15 bg-white p-5 text-[var(--cc-charcoal)] shadow-2xl md:p-6">
        <h3 class="text-lg font-semibold">Get your free quotes</h3>
        <form class="mt-4 grid gap-3" @submit.prevent="submit">
          <select
            v-model="answers.category"
            required
            class="rounded-lg border border-black/15 px-3 py-2 text-sm outline-none transition focus:border-[var(--cc-brand-blue)]"
          >
            <option disabled value="">Project type</option>
            <option v-for="category in siteTaxonomy.categories" :key="category.id" :value="category.name">
              {{ category.name }}
            </option>
          </select>
          <input
            v-model="answers.zipcode"
            class="rounded-lg border border-black/15 px-3 py-2 text-sm outline-none transition focus:border-[var(--cc-brand-blue)]"
            type="text"
            inputmode="numeric"
            autocomplete="postal-code"
            pattern="[0-9]{5}"
            maxlength="5"
            placeholder="ZIP code"
            required
          />
          <p v-if="zipcodeError" class="text-sm text-red-600" role="alert">{{ zipcodeError }}</p>
          <button type="submit" class="mt-1 block rounded-lg bg-[var(--cc-yellow)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--cc-charcoal)] transition hover:bg-[#ffca0d]">Get quotes</button>
        </form>
        <p class="mt-3 text-xs text-black/50">By submitting, you agree to our terms and privacy policy.</p>
      </div>
    </div>
  </section>
</template>
