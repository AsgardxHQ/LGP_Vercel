<script setup lang="ts">
const links = [
  { label: 'Browse Projects', href: '#projects' }
]

const emit = defineEmits<{
  openQuestionModal: []
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-[var(--cc-yellow)]">
    <div class="pointer-events-none absolute right-0 top-0 h-full w-[48%] bg-[linear-gradient(135deg,transparent_0%,transparent_42%,rgba(255,255,255,0.2)_42%,rgba(255,255,255,0.2)_62%,transparent_62%)]" />
    <div class="cc-container relative z-10 py-8 md:py-12">
      <nav class="mb-10 flex items-center justify-between">
        <div class="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em]">
          <span class="inline-block h-3 w-3 rotate-45 bg-[var(--cc-charcoal)]" />
          <span>Contractors<small class="ml-0.5 align-top text-[7px] tracking-normal">.COM</small></span>
        </div>
        <div class="hidden items-center gap-7 text-sm font-medium md:flex">
          <a v-for="link in links" :key="link.label" :href="link.href" class="transition hover:opacity-60">{{ link.label }}</a>
          <button class="rounded-full bg-[var(--cc-charcoal)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white" type="button" @click="emit('openQuestionModal')">Start your project</button>
        </div>
      </nav>

      <div class="grid gap-8 md:grid-cols-[1.02fr_0.98fr] md:items-center">
        <div class="section-reveal">
          <h1 class="max-w-xl text-4xl font-bold leading-tight md:text-6xl">A better way to hire for your home</h1>
          <p class="mt-5 max-w-lg text-base text-[var(--cc-ink-soft)] md:text-lg">
            We help cautious homeowners make confident hiring decisions through verified reviews, transparent pricing, and expert guidance, not just quote collection.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <button class="rounded-full bg-[var(--cc-charcoal)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5" type="button" @click="emit('openQuestionModal')">Get Started <span class="ml-2">&rarr;</span></button>
            <a href="#resources" class="rounded-full border border-[var(--cc-charcoal)]/25 bg-white/80 px-6 py-3 text-sm font-semibold transition hover:bg-white">Explore Decision Guides</a>
          </div>
        </div>

        <div class="section-reveal md:[animation-delay:140ms]">
          <div class="relative mx-auto max-w-xl md:-mr-10">
            <img
              src="/images/hero-house.png"
              alt="Modern home exterior at dusk"
              class="h-[500px] w-full object-contain object-bottom md:h-[560px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>