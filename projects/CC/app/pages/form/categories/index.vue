<script setup lang="ts">
import { siteTaxonomy } from '../../../utils/page-flow';

const { goPrevious } = usePageFlow('categories');
const { selectCategory } = useCategorySelection();
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-8 sm:py-14">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">Project type</h1>
    <p class="mt-2 text-gray-600">Choose one category to continue.</p>

    <div class="mt-6 space-y-3">
      <button
        v-for="category in siteTaxonomy.categories"
        :key="category.id"
        class="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-gray-800 transition hover:border-blue-500"
        type="button"
        @click="selectCategory(category.name)"
      >
        {{ category.name }}
      </button>
    </div>

    <button class="mt-6 text-sm font-medium text-blue-700" type="button" @click="goPrevious">Back</button>
  </section>
</template>
