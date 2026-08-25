<script setup lang="ts">
import { ref } from 'vue'

const links = [
  { label: 'Browse Projects', href: '#projects' }
]

const emit = defineEmits<{
  openQuestionModal: []
}>()

const mobileMenuOpen = ref(false)
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-[var(--cc-yellow)] via-[#ffdd6a] to-[#fff3c9] lg:min-h-[640px]">
    <div class="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[46%] max-w-[640px] lg:block">
      <img
        src="/images/house-bg.png"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 -z-10 h-full w-full scale-125 object-contain"
      />
      <img
        src="/images/cc-home-hero-house.png"
        alt="Modern home exterior at dusk"
        class="relative h-full w-full object-cover object-bottom"
      />
    </div>

    <div class="cc-container relative z-10 py-8 md:py-12">
      <nav class="relative z-20 mb-10 flex items-center justify-between">
        <div class="flex items-center">
          <img src="/images/cc-header-logo.svg" alt="Contractors.com" class="h-8 w-auto md:h-9" />
        </div>
        <div class="hidden items-center gap-7 text-sm font-medium md:flex">
          <a v-for="link in links" :key="link.label" :href="link.href" class="transition hover:opacity-60">{{ link.label }}</a>
          <button class="rounded-[5px] bg-[var(--cc-charcoal)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white" type="button" @click="emit('openQuestionModal')">Start your project</button>
        </div>
        <button
          class="flex h-9 w-9 items-center justify-center md:hidden"
          type="button"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-6 w-6">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-6 w-6">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
      </nav>

      <div v-if="mobileMenuOpen" class="relative z-20 mb-8 flex flex-col gap-4 text-sm font-medium md:hidden">
        <a v-for="link in links" :key="link.label" :href="link.href" class="transition hover:opacity-60" @click="mobileMenuOpen = false">{{ link.label }}</a>
        <button class="rounded-[5px] bg-[var(--cc-charcoal)] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white" type="button" @click="mobileMenuOpen = false; emit('openQuestionModal')">Start your project</button>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div class="section-reveal">
          <h1 class="max-w-xl text-4xl font-bold leading-tight md:text-6xl">A better way to hire for your home</h1>
          <p class="mt-5 max-w-lg text-base text-[var(--cc-ink-soft)] md:text-lg">
            We help cautious homeowners make confident hiring decisions through verified reviews, transparent pricing, and expert guidance, not just quote collection.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button class="w-full rounded-[5px] bg-[var(--cc-charcoal)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto" type="button" @click="emit('openQuestionModal')">Get Started <span class="ml-2">&rarr;</span></button>
            <a href="#resources" class="w-full rounded-[5px] border border-[var(--cc-charcoal)]/30 bg-transparent px-6 py-3 text-center text-sm font-semibold transition hover:bg-white/40 sm:w-auto">Explore Decision Guides</a>
          </div>
        </div>

        <div class="section-reveal z-0 lg:hidden">
          <div class="relative z-0 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen max-w-none aspect-[4/4] overflow-hidden sm:aspect-[2351/1984]">
            <img
              src="/images/house-bg.png"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-125 object-contain"
            />
            <img
              src="/images/cc-home-hero-house.png"
              alt="Modern home exterior at dusk"
              class="relative h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>