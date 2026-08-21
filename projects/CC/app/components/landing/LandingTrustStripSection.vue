<script setup lang="ts">
const items = [
  { title: 'BBB A+ Rating', body: 'Better Business Bureau' },
  { title: '500K+ Reviews', body: 'Verified homeowners' },
  { title: 'Licensed & Insured', body: 'All contractors' },
  { title: 'Background Checked', body: 'Criminal & business history' }
]
</script>

<template>
  <section class="relative z-20 -mt-6">
    <div class="cc-container">
      <div class="rounded-[2px] border border-black/10 bg-[linear-gradient(180deg,#fff7d4_0%,#ffffff_48%)] px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] md:px-8 md:py-6">
        <p class="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--cc-charcoal)] md:text-[11px]">Trusted by over 1 million homeowners</p>
        <div class="grid gap-3 md:grid-cols-4">
          <article v-for="item in items" :key="item.title" class="flex min-h-[76px] items-center gap-3 rounded-lg border border-black/10 bg-white px-3 py-3 text-[var(--cc-ink-soft)] shadow-[0_2px_8px_rgba(0,0,0,0.03)] md:min-h-[82px] md:px-4">
            <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b8e3df] bg-[#effaf8] text-xs text-[#6aa5a0]" aria-hidden="true">&#10003;</span>
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
