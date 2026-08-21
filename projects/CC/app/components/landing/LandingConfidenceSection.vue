<script setup lang="ts">
const cards = [
  {
    title: 'Decision support',
    body: 'Shortlists and side-by-side comparisons remove guesswork before you hire.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Continuous accountability',
    body: 'Progress milestones and transparent updates keep every project on track.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Expert guidance',
    body: 'Practical checklists and renovation tips at each step from planning to completion.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <section class="cc-section py-16 md:py-20">
    <div class="cc-container">
      <p class="section-reveal mb-3 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#ef6c3b]">Why choose us</p>
      <h2 class="section-reveal text-center text-3xl font-bold md:text-4xl">Where homeowner confidence comes first</h2>
      <div class="mt-10 grid gap-8 md:grid-cols-3">
        <article v-for="(card, index) in cards" :key="card.title" class="section-reveal" :style="{ animationDelay: `${index * 120}ms` }">
          <h3 class="text-base font-semibold">{{ card.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-[var(--cc-ink-soft)]">{{ card.body }}</p>
          <a href="#get-started" class="mt-4 inline-flex items-center text-sm font-semibold text-[var(--cc-brand-blue)]">Start your project <span class="ml-2">&rarr;</span></a>
        </article>
      </div>
      <div class="mt-7 grid gap-4 md:grid-cols-3">
        <img v-for="card in cards" :key="`${card.title}-image`" :src="card.image" :alt="card.title" class="h-40 w-full object-cover" />
      </div>
    </div>
  </section>
</template>
