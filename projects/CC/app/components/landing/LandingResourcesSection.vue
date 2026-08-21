<script setup lang="ts">
const resources = [
  {
    title: 'Kitchen remodel cost guide',
    body: 'Understand budgets and hidden variables before choosing bids.',
    cta: 'Read guide'
  },
  {
    title: 'Project timeline planner',
    body: 'Know milestone ranges and realistic durations by project type.',
    cta: 'View timeline'
  },
  {
    title: 'Contractor hiring checklist',
    body: 'Use a practical checklist for interviews and quote reviews.',
    cta: 'Download'
  },
  {
    title: 'Know the red flags',
    body: 'Avoid common mistakes with pre-hire warning indicators.',
    cta: 'Open checklist'
  }
]
</script>

<template>
  <section id="resources" class="cc-section py-16 md:py-20">
    <div class="cc-container">
      <h2 class="text-center text-3xl font-bold md:text-4xl">Expert guidance for your project</h2>
      <div class="mt-10 grid gap-4 md:grid-cols-4">
        <article v-for="resource in resources" :key="resource.title" class="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
          <div class="mb-4 h-2 w-16 bg-[var(--cc-yellow)]" />
          <h3 class="text-base font-semibold leading-snug">{{ resource.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-[var(--cc-ink-soft)]">{{ resource.body }}</p>
          <a href="#get-started" class="mt-5 inline-flex items-center text-sm font-semibold text-[var(--cc-brand-blue)]">{{ resource.cta }} <span class="ml-2">&rarr;</span></a>
        </article>
      </div>
    </div>
  </section>
</template>
