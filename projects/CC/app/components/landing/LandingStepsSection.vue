<script setup lang="ts">
const steps = [
  {
    id: '01',
    title: 'Describe your project',
    body: 'Share timeline, budget, and priorities so we can match the right specialists.'
  },
  {
    id: '02',
    title: 'Hire with confidence',
    body: 'Review ratings, credentials, and portfolios from recommended professionals.'
  },
  {
    id: '03',
    title: 'Compare quotes',
    body: 'Receive clear estimates and choose the contractor that fits your project best.'
  }
]
</script>

<template>
  <section id="how-it-works" class="cc-section py-16 md:py-20">
    <div class="cc-container">
      <p class="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cc-muted)]">How it works</p>
      <h2 class="text-center text-3xl font-bold md:text-4xl">Simple steps to hire the right contractor</h2>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article v-for="step in steps" :key="step.id" class="group relative rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
          <p class="text-4xl font-bold text-black/10">{{ step.id }}</p>
          <h3 class="mt-4 text-lg font-semibold">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-[var(--cc-ink-soft)]">{{ step.body }}</p>
        </article>
      </div>
      <div class="mt-8 text-center">
        <a href="#get-started" class="inline-block rounded-[5px] bg-[var(--cc-yellow)] px-6 py-3 text-sm font-semibold text-[var(--cc-charcoal)] transition hover:bg-[#ffcc0f]">Get a quote today</a>
      </div>
    </div>
  </section>
</template>
