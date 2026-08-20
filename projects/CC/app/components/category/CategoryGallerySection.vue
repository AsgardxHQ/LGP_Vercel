<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { CategoryContent } from '../../utils/category-content';
import { fallbackImage } from '../../utils/category-content';

const props = defineProps<{ content: CategoryContent }>();

const activeStyle = ref(props.content.styles[0] ?? '');
const broken = reactive<Record<number, boolean>>({});

// Rotating the pool per style keeps each filter visually distinct without new assets.
const tiles = computed(() => {
  const pool = props.content.galleryImages;
  const offset = Math.max(props.content.styles.indexOf(activeStyle.value), 0);
  return Array.from({ length: 6 }, (_, index) => pool[(index + offset) % pool.length] ?? fallbackImage);
});
</script>

<template>
  <section class="cc-section py-16 md:py-20">
    <div class="cc-container">
      <h2 class="text-center text-3xl font-bold md:text-4xl">{{ content.galleryTitle }}</h2>

      <div class="mt-8 flex flex-wrap justify-center gap-2">
        <button
          v-for="style in content.styles"
          :key="style"
          type="button"
          class="rounded-full px-4 py-2 text-xs font-semibold transition"
          :class="style === activeStyle
            ? 'bg-[#bfe3d8] text-[var(--cc-charcoal)]'
            : 'border border-black/10 text-[var(--cc-ink-soft)] hover:bg-black/[0.03]'"
          @click="activeStyle = style"
        >
          {{ style }}
        </button>
      </div>

      <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <img
          v-for="(tile, index) in tiles.slice(0, 3)"
          :key="`${activeStyle}-${index}`"
          :src="broken[index] ? fallbackImage : tile"
          :alt="`${activeStyle} ${content.noun}`"
          class="h-56 w-full rounded-lg object-cover"
          :class="index === 0 ? 'lg:row-span-2 lg:h-full lg:min-h-[344px]' : ''"
          @error="broken[index] = true"
        />

        <div class="flex h-56 flex-col justify-end rounded-lg bg-[var(--cc-charcoal)] p-5 text-white">
          <p class="text-lg font-semibold">{{ content.featuredService }}</p>
          <p class="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Estimated cost</p>
          <p class="mt-1 text-xl font-bold text-[var(--cc-yellow)]">{{ content.featuredCost }}</p>
        </div>

        <img
          v-for="(tile, index) in tiles.slice(3, 6)"
          :key="`${activeStyle}-tail-${index}`"
          :src="broken[index + 3] ? fallbackImage : tile"
          :alt="`${activeStyle} ${content.noun}`"
          class="h-56 w-full rounded-lg object-cover"
          @error="broken[index + 3] = true"
        />
      </div>
    </div>
  </section>
</template>
