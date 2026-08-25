<script setup lang="ts">
import { ref } from 'vue';
import type { CategoryContent } from '../../utils/category-content';
import { fallbackImage } from '../../utils/category-content';

defineProps<{ content: CategoryContent }>();

const imageFailed = ref(false);
</script>

<template>
  <section class="cc-section">
    <div class="bg-[linear-gradient(135deg,#ffd11f_0%,#ffdf5c_55%,#ffeb9a_100%)] pb-28 pt-6 md:pb-32">
      <div class="cc-container">
        <nav class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center">
            <img src="/images/cc-header-logo.svg" alt="Contractors.com" class="h-8 w-auto md:h-9" />
          </NuxtLink>
          <div class="flex items-center gap-5">
            <a href="#category-services" class="hidden text-sm font-medium transition hover:opacity-60 sm:block">Browse Projects</a>
            <a
              href="#category-quote"
              class="rounded-full bg-[var(--cc-charcoal)] px-5 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5"
            >
              Start your project
            </a>
          </div>
        </nav>

        <div class="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div class="section-reveal">
            <h1 class="max-w-xl text-4xl font-bold leading-[1.08] md:text-[3.25rem]">{{ content.heroTitle }}</h1>
            <p class="mt-6 max-w-md text-sm leading-relaxed text-[var(--cc-ink-soft)] md:text-base">
              {{ content.heroSubtitle }}
            </p>
          </div>

          <div class="section-reveal md:[animation-delay:120ms]">
            <div class="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(17,22,33,0.18)]">
              <div class="px-6 pb-6 pt-7 text-center">
                <p class="text-lg font-bold">Every contractor verified.</p>
                <p class="mt-1 text-sm text-[var(--cc-ink-soft)]">Every project protected.</p>

                <a
                  href="#category-quote"
                  class="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[var(--cc-charcoal)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Get started
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="#category-benefits"
                  class="mt-3 flex items-center justify-center gap-2 rounded-lg border border-black/15 px-5 py-3 text-sm font-semibold transition hover:bg-black/[0.03]"
                >
                  Get decision guide
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <div class="flex items-center justify-center gap-6 border-t border-black/10 bg-[#fbfbfa] px-6 py-3 text-[11px] font-medium text-[var(--cc-ink-soft)]">
                <span class="flex items-center gap-1.5">
                  <span class="inline-block h-1.5 w-1.5 rounded-full bg-[var(--cc-brand-blue)]" />
                  Licensed &amp; insured
                </span>
                <span class="flex items-center gap-1.5">
                  <span class="inline-block h-1.5 w-1.5 rounded-full bg-[var(--cc-brand-blue)]" />
                  All contractors verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cc-container -mt-20 md:-mt-24">
      <img
        :src="imageFailed ? fallbackImage : content.heroImage"
        :alt="content.servicesTitle"
        class="h-[260px] w-full rounded-xl object-cover shadow-[0_20px_50px_rgba(17,22,33,0.18)] md:h-[380px]"
        @error="imageFailed = true"
      />
    </div>
  </section>
</template>
