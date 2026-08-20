<script setup lang="ts">
import { reactive } from 'vue'
import { useCategorySelection } from '../../composables/useCategorySelection'

const { selectCategory } = useCategorySelection()

const projects = [
  {
    title: 'Kitchen Remodel',
    category: 'Kitchen',
    subtitle: 'From $25,000 in most metros',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Bathroom Remodel',
    category: 'Bathroom',
    subtitle: 'From $15,000 in most metros',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Flooring',
    category: 'Flooring',
    subtitle: 'From $3,000+',
    image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Roofing',
    category: 'Roofing',
    subtitle: 'From $9,500+',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1000&q=80'
  }
]

const fallbackImage = 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80'
const brokenByTitle = reactive<Record<string, boolean>>({})

function handleImageError(title: string) {
  brokenByTitle[title] = true
}
</script>

<template>
  <section class="cc-section bg-[linear-gradient(180deg,#fff7d4_0%,#ffe764_100%)] py-16 md:py-20">
    <div class="cc-container">
      <p class="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--cc-muted)]">Featured projects</p>
      <h2 class="text-center text-3xl font-bold md:text-4xl">Explore by project</h2>

      <div class="mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative overflow-hidden rounded-2xl border border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
          :class="index === 0 ? 'md:col-span-2 md:row-span-2 min-h-[340px]' : 'min-h-[160px]'
          "
        >
          <button
            class="absolute inset-0 z-10 h-full w-full cursor-pointer"
            type="button"
            :aria-label="`Start a ${project.title} project`"
            @click="selectCategory(project.category)"
          />
          <img
            :src="brokenByTitle[project.title] ? fallbackImage : project.image"
            :alt="project.title"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            @error="handleImageError(project.title)"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-xs uppercase tracking-[0.18em] text-white/80">{{ project.subtitle }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
