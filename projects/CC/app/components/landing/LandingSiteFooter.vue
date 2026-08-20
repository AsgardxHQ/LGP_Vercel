<script setup lang="ts">
const year = new Date().getFullYear()

const columns = [
  {
    title: 'For homeowners',
    links: ['Cost Guides', 'Project Ideas', 'Pro Reviews']
  },
  {
    title: 'For contractors',
    links: ['Join Network', 'Success Stories', 'Pricing']
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Privacy Policy']
  }
]
</script>

<template>
  <footer class="border-t border-white/10 bg-[var(--cc-charcoal)] pb-10 pt-8 text-white/85">
    <div class="cc-container">
      <div class="flex flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p class="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-white">
            <span class="inline-block h-2 w-2 rotate-45 bg-[var(--cc-yellow)]" />
            Contractors
          </p>
          <p class="mt-3 text-sm text-white/60">Connecting homeowners with trusted local pros.</p>
        </div>

        <div class="grid flex-1 gap-6 sm:grid-cols-3 md:ml-16">
          <div v-for="column in columns" :key="column.title">
            <h4 class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cc-yellow)]">{{ column.title }}</h4>
            <ul class="mt-3 space-y-2 text-sm text-white/70">
              <li v-for="link in column.links" :key="link">
                <a href="#" class="transition hover:text-white">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p class="mt-10 border-t border-white/10 pt-4 text-xs text-white/45">&copy; {{ year }} Contractors, Inc. All rights reserved.</p>
    </div>
  </footer>
</template>
