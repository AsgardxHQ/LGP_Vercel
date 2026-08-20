<script setup lang="ts">
import { ref } from 'vue';
import type { CategoryContent } from '../../utils/category-content';
import { useTaxonomyRoute } from '../../composables/useTaxonomyRoute';

defineProps<{ content: CategoryContent }>();

const { category } = useTaxonomyRoute();
const track = ref<HTMLElement | null>(null);

const scrollByCard = (direction: number) => {
  const el = track.value;
  if (!el) return;
  el.scrollBy({ left: direction * (el.clientWidth * 0.6), behavior: 'smooth' });
};
</script>

<template>
  <section class="cc-section py-16 md:py-20">
    <div class="cc-container">
      <div class="flex items-end justify-between gap-6">
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2574c]">Real homeowners, real projects</p>
          <h2 class="mt-3 text-3xl font-bold md:text-4xl">What homeowners are saying</h2>
        </div>

        <div class="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous testimonials"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition hover:bg-black/[0.04]"
            @click="scrollByCard(-1)"
          >
            &larr;
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition hover:bg-black/[0.04]"
            @click="scrollByCard(1)"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div ref="track" class="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <article
          v-for="testimonial in content.testimonials"
          :key="testimonial.name"
          class="w-[300px] shrink-0 snap-start rounded-xl border border-black/10 bg-white p-5 md:w-[340px]"
        >
          <p class="text-sm tracking-[0.2em] text-[var(--cc-yellow)]" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <p class="mt-3 text-sm leading-relaxed text-[var(--cc-ink-soft)]">&ldquo;{{ testimonial.quote }}&rdquo;</p>

          <div class="mt-5 flex items-center justify-between gap-3">
            <div>
              <p class="text-sm font-semibold">{{ testimonial.name }}</p>
              <p class="text-xs text-[var(--cc-muted)]">{{ testimonial.location }}</p>
            </div>
            <span class="rounded-full bg-[#ffe9c7] px-3 py-1 text-[10px] font-semibold text-[#a35b12]">
              {{ category?.name ?? 'Home project' }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
