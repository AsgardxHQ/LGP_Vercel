<script setup lang="ts">
import type { CategoryContent } from '../../utils/category-content';

defineProps<{ content: CategoryContent }>();
</script>

<template>
  <section id="category-benefits" class="cc-section py-16 md:py-20">
    <div class="cc-container">
      <p class="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2574c]">Benefits</p>
      <h2 class="mt-3 text-center text-3xl font-bold md:text-4xl">{{ content.benefitsTitle }}</h2>
      <p class="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--cc-ink-soft)]">{{ content.benefitsSubtitle }}</p>

      <div class="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        <article
          v-for="benefit in content.benefits"
          :key="benefit.title"
          class="rounded-xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,22,33,0.1)]"
        >
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--cc-brand-blue)] text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <h3 class="mt-4 text-sm font-semibold">{{ benefit.title }}</h3>
          <p class="mt-2 text-xs leading-relaxed text-[var(--cc-ink-soft)]">{{ benefit.body }}</p>
        </article>
      </div>

      <div class="mt-10 text-center">
        <a
          href="#category-quote"
          class="inline-flex items-center gap-2 rounded-lg bg-[var(--cc-yellow)] px-6 py-3 text-sm font-semibold text-[var(--cc-charcoal)] transition hover:bg-[#ffca0d]"
        >
          Get a quote today
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>
