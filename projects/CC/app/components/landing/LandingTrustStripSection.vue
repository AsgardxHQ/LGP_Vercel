<script setup lang="ts">
const items = [
  {
    title: 'BBB A+ Rating',
    body: 'Better Business Bureau',
    icon: 'M12 3l7 3v4c0 4.6-2.9 8.1-7 10.2C7.9 18.1 5 14.6 5 10V6l7-3z M9 12l2 2 4-4'
  },
  {
    title: '500K+ Reviews',
    body: 'Verified homeowners',
    icon: 'M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.3 6.1-.9z'
  },
  {
    title: 'Licensed & Insured',
    body: 'All contractors verified',
    icon: 'M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z M9 12l2 2 4-4'
  },
  {
    title: 'Background Checked',
    body: 'Criminal & business history',
    icon: 'M9 8a3 3 0 106 0 3 3 0 00-6 0z M3 20c0-3.3 3.1-6 7-6M17 9a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z M15.5 14.3c2.6.4 4.5 2.4 4.5 5.7'
  }
]
</script>

<template>
  <section class="relative z-20 -mt-10 md:-mt-12">
    <div class="cc-container">
      <div class="rounded-2xl border border-white/50 bg-white/40 px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-lg md:px-8 md:py-6">
        <p class="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--cc-charcoal)] md:text-[11px]">Trusted by over 1 million homeowners</p>
        <div class="grid gap-3 md:grid-cols-4">
          <article v-for="item in items" :key="item.title" class="flex min-h-[76px] items-center gap-3 rounded-lg border border-white/60 bg-white/70 px-3 py-3 text-[var(--cc-ink-soft)] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm md:min-h-[82px] md:px-4">
            <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--cc-charcoal)]/8 text-[var(--cc-charcoal)]" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path :d="item.icon" />
              </svg>
            </span>
            <span>
              <span class="block text-xs font-semibold leading-tight text-[var(--cc-charcoal)]">{{ item.title }}</span>
              <span class="mt-1 block text-[10px] leading-tight text-[var(--cc-muted)]">{{ item.body }}</span>
            </span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
