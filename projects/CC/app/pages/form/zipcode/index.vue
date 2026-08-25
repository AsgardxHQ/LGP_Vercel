<script setup lang="ts">
import { ref } from 'vue';
import { isValidZipcode } from '@/utils';

const answers = useFlowAnswers();
const { goNext } = usePageFlow('zipcode');
const error = ref('');

const submit = () => {
  const zipcode = answers.value.zipcode.trim();
  if (!isValidZipcode(zipcode)) {
    error.value = 'Enter a 5-digit ZIP code.';
    return;
  }
  answers.value.zipcode = zipcode;
  error.value = '';
  goNext();
};
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-8 sm:py-14">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">Enter your zip code to get started</h1>
    <p class="mt-2 text-gray-600">We use your zip code to match local professionals near you.</p>

    <form class="mt-6 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200" @submit.prevent="submit">
      <label class="block">
        <span class="mb-2 block text-lg font-medium text-gray-900">Zip code</span>
        <input
          v-model="answers.zipcode"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          type="text"
          inputmode="numeric"
          autocomplete="postal-code"
          pattern="[0-9]{5}"
          maxlength="5"
          required
        >
        <p v-if="error" class="mt-2 text-sm text-red-600" role="alert">{{ error }}</p>
      </label>
      <button class="w-full rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800" type="submit">
        Continue
      </button>
    </form>
  </section>
</template>
