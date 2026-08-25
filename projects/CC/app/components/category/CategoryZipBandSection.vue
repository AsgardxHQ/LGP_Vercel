<script setup lang="ts">
import type { CategoryContent } from '../../utils/category-content';
import { useFlowAnswers } from '../../utils/usePageFlow';
import { sanitizeZipInput } from '#shared-utils/form-validation';

defineProps<{ content: CategoryContent }>();

const answers = useFlowAnswers();

const submit = () => {
  const target = document.getElementById('category-quote');
  target?.scrollIntoView({ behavior: 'smooth' });
};

const onZipInput = (event: Event) => {
  answers.value.zipcode = sanitizeZipInput((event.target as HTMLInputElement).value);
};
</script>

<template>
  <section class="cc-section bg-[var(--cc-yellow)] py-10 md:py-12">
    <div class="cc-container">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 class="max-w-sm text-2xl font-bold leading-snug md:text-[1.75rem]">{{ content.zipTitle }}</h2>

        <form class="flex w-full max-w-md flex-col gap-3 sm:flex-row" @submit.prevent="submit">
          <input
            :value="answers.zipcode"
            type="text"
            inputmode="numeric"
            autocomplete="postal-code"
            placeholder="Enter your zip code"
            maxlength="5"
            class="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--cc-charcoal)]"
            @input="onZipInput"
          />
          <button
            type="submit"
            class="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--cc-charcoal)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Get started
            <span aria-hidden="true">&rarr;</span>
          </button>
        </form>
      </div>

      <p class="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--cc-ink-soft)]">
        Free estimate &middot; No obligation
      </p>
    </div>
  </section>
</template>
