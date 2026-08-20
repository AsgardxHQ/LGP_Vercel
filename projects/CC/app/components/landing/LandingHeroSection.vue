<script setup lang="ts">
const links = ['Browse Projects', 'How It Works', 'Pricing']

const emit = defineEmits<{
  openQuestionModal: []
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-[var(--cc-yellow)]">
    <div class="cc-container relative z-10 py-8 md:py-12">
      <nav class="mb-10 flex items-center justify-between">
        <div class="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em]">
          <span class="inline-block h-2 w-2 rotate-45 bg-[var(--cc-charcoal)]" />
          Contractors
        </div>
        <div class="hidden items-center gap-7 text-sm font-medium md:flex">
          <a v-for="link in links" :key="link" href="#" class="transition hover:opacity-60">{{ link }}</a>
          <button class="rounded-full bg-[var(--cc-charcoal)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white" type="button" @click="emit('openQuestionModal')">Start your project</button>
        </div>
      </nav>

      <div class="grid gap-8 md:grid-cols-[1.02fr_0.98fr] md:items-center">
        <div class="section-reveal">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--cc-ink-soft)]">Trusted by 100k+ homeowners</p>
          <h1 class="max-w-xl text-4xl font-bold leading-tight md:text-6xl">A better way to hire for your home</h1>
          <p class="mt-5 max-w-lg text-base text-[var(--cc-ink-soft)] md:text-lg">
            Find vetted professionals, compare project quotes, and move from idea to done with confidence.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <button class="rounded-full bg-[var(--cc-charcoal)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5" type="button" @click="emit('openQuestionModal')">Get Started</button>
            <button class="rounded-full border border-[var(--cc-charcoal)]/25 bg-white/80 px-6 py-3 text-sm font-semibold transition hover:bg-white" type="button" @click="emit('openQuestionModal')">Explore Services</button>
          </div>
        </div>

        <div class="section-reveal md:[animation-delay:140ms]">
          <div class="relative mx-auto max-w-xl overflow-hidden border border-black/10 bg-white shadow-[0_24px_70px_rgba(17,22,33,0.22)]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
              alt="Modern home exterior"
              class="h-[420px] w-full object-cover"
            />
            <div class="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cc-muted)]">Top match this week</p>
              <p class="mt-1 text-sm text-[var(--cc-ink-soft)]">4.9 average rating across 2,300 reviewed contractors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>