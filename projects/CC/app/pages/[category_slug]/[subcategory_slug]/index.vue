<script setup lang="ts">
import { findSubcategoryId } from '../../../utils/site-taxonomy';
import { useFlowAnswers, usePageFlow } from '../../../utils/usePageFlow';
import { useTaxonomyRoute } from '../../../composables/useTaxonomyRoute';

const answers = useFlowAnswers();
const { category, subcategory } = useTaxonomyRoute();
const { goNext, goPrevious } = usePageFlow('subcategories');

if (category.value) {
  answers.value.category = category.value.name;
  answers.value.categoryId = category.value.id;
}
if (subcategory.value) {
  answers.value.subcategory = subcategory.value;
  answers.value.subcategoryId = category.value ? findSubcategoryId(category.value.sourceName, subcategory.value) : '';
}
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-8 sm:py-14">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">Confirm your selection</h1>
    <p class="mt-2 text-gray-600">
      {{ category?.name }} / {{ subcategory ?? 'Unknown service' }}
    </p>

    <div class="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <p class="text-gray-700">Continue to answer a few quick questions and get matched.</p>
      <div class="mt-6 flex gap-4">
        <button class="flex-1 rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:border-gray-400" type="button" @click="goPrevious">
          Back
        </button>
        <button class="flex-1 rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800" type="button" @click="goNext">
          Continue
        </button>
      </div>
    </div>
  </section>
</template>
