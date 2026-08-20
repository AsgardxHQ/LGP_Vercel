<script setup lang="ts">
import { siteTaxonomy } from '../../../utils/page-flow';

const answers = useFlowAnswers();
const { goNext, goPrevious } = usePageFlow('ownership');

const ownershipQuestion = siteTaxonomy.questions.find((question) => question.id === 'ownership');

const selectOwnership = (value: string) => {
  answers.value.ownership = value;
  goNext();
};
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-8 sm:py-14">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">Home ownership</h1>
    <p class="mt-2 text-gray-600">Tell us about the property for this project.</p>

    <div class="mt-6 space-y-3">
      <button
        v-for="option in ownershipQuestion?.options ?? []"
        :key="option"
        class="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-gray-800 transition hover:border-blue-500"
        type="button"
        @click="selectOwnership(option)"
      >
        {{ option }}
      </button>
    </div>

    <button class="mt-6 text-sm font-medium text-blue-700" type="button" @click="goPrevious">Back</button>
  </section>
</template>
