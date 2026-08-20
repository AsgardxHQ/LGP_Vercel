<script setup lang="ts">
const items = [
  'BBB A+ Rating',
  '500K+ Reviews',
  'Licensed & Insured',
  'Background Checked'
]
</script>

<template>
  <section class="relative -mt-6 z-20">
    <div class="cc-container">
      <div class="grid gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] md:grid-cols-4">
        <article v-for="item in items" :key="item" class="rounded-xl border border-black/5 bg-[var(--cc-cream)] px-4 py-3 text-sm font-medium text-[var(--cc-ink-soft)]">
          <span class="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--cc-yellow)]" />
          {{ item }}
        </article>
      </div>
    </div>
  </section>
</template>
