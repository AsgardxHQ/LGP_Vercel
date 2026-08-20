<script setup lang="ts">
import { ref } from 'vue';
import type { CategoryContent } from '../../utils/category-content';
import { fallbackImage } from '../../utils/category-content';

defineProps<{ content: CategoryContent }>();

const steps = [
  {
    id: '01',
    title: 'Tell us about your project',
    body: 'Share scope, timeline, and budget so we can match the right specialists.'
  },
  {
    id: '02',
    title: 'Connect with a contractor',
    body: 'Your project goes to a small number of licensed, vetted contractors who specialize in this type of work. Not a mass blast to everyone available.'
  },
  {
    id: '03',
    title: 'Compare and hire',
    body: 'Review itemized estimates side by side and hire the pro that fits your project best.'
  }
];

const activeStep = ref(1);
const imageFailed = ref(false);
</script>

<template>
  <section class="cc-section py-16 md:py-20">
    <div class="cc-container">
      <p class="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2574c]">How it works</p>
      <h2 class="mt-3 text-center text-3xl font-bold md:text-4xl">{{ content.stepsTitle }}</h2>
      <p class="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--cc-ink-soft)]">{{ content.stepsSubtitle }}</p>

      <div class="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
        <img
          :src="imageFailed ? fallbackImage : content.stepsImage"
          alt="Homeowners reviewing a project plan with a contractor"
          class="h-[260px] w-full rounded-xl object-cover md:h-[360px]"
          @error="imageFailed = true"
        />

        <ol class="border-l border-black/10">
          <li v-for="(step, index) in steps" :key="step.id" class="relative pl-8">
            <span
              v-if="index === activeStep"
              class="absolute -left-px top-0 h-full w-[3px] bg-[var(--cc-yellow)]"
              aria-hidden="true"
            />
            <button
              type="button"
              class="block w-full py-5 text-left transition"
              :class="index === activeStep ? '' : 'opacity-40 hover:opacity-70'"
              @click="activeStep = index"
            >
              <span
                class="block text-3xl font-bold md:text-4xl"
                :class="index === activeStep ? 'text-[var(--cc-yellow)]' : 'text-[var(--cc-muted)]'"
              >
                {{ step.id }}
              </span>
              <span class="mt-2 block text-base font-semibold">{{ step.title }}</span>
              <span v-if="index === activeStep" class="mt-2 block text-sm leading-relaxed text-[var(--cc-ink-soft)]">
                {{ step.body }}
              </span>
            </button>
            <a
              v-if="index === activeStep"
              href="#category-quote"
              class="mb-5 inline-block text-sm font-semibold underline underline-offset-4"
            >
              Start your project &rarr;
            </a>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
