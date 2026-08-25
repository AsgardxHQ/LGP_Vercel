<script setup lang="ts">
import { ref } from 'vue';
import { formatUsPhone, isValidUsPhone } from '@/utils';

const answers = useFlowAnswers();
const { goNext, goPrevious } = usePageFlow('phone');
const error = ref('');

const formatPhone = () => {
  answers.value.phone = formatUsPhone(answers.value.phone);
};

const submit = () => {
  formatPhone();
  if (!isValidUsPhone(answers.value.phone)) {
    error.value = 'Enter a 10-digit US phone number.';
    return;
  }
  error.value = '';
  goNext();
};
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-8 sm:py-14">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">What is your phone number?</h1>

    <form class="mt-6 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200" @submit.prevent="submit">
      <label class="block">
        <span class="mb-2 block text-lg font-medium text-gray-900">Phone</span>
        <input
          v-model="answers.phone"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          type="tel"
          inputmode="tel"
          autocomplete="tel"
          placeholder="(555) 555-5555"
          maxlength="14"
          @input="formatPhone"
          required
        >
        <p v-if="error" class="mt-2 text-sm text-red-600" role="alert">{{ error }}</p>
      </label>
      <div class="flex gap-4">
        <button class="flex-1 rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:border-gray-400" type="button" @click="goPrevious">
          Back
        </button>
        <button class="flex-1 rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800" type="submit">
          Continue
        </button>
      </div>
    </form>
  </section>
</template>
