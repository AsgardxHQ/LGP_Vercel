<script setup lang="ts">
const answers = useFlowAnswers();
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-8 sm:py-14">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">Thank you</h1>
    <p class="mt-2 text-gray-600">Your request was captured successfully.</p>

    <div class="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">Request summary</h2>
      <dl class="mt-4 space-y-2 text-sm text-gray-700">
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Zip code</dt>
          <dd>{{ answers.zipcode || '-' }}</dd>
        </div>
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Project type</dt>
          <dd>{{ answers.category || '-' }}</dd>
        </div>
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Subcategory</dt>
          <dd>{{ answers.subcategory || '-' }}</dd>
        </div>
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Ownership</dt>
          <dd>{{ answers.ownership || '-' }}</dd>
        </div>
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Full name</dt>
          <dd>{{ answers.fullName || '-' }}</dd>
        </div>
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Email</dt>
          <dd>{{ answers.email || '-' }}</dd>
        </div>
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Phone</dt>
          <dd>{{ answers.phone || '-' }}</dd>
        </div>
        <div class="flex justify-between gap-4">
          <dt class="font-medium">Address</dt>
          <dd class="text-right">{{ answers.address || '-' }}</dd>
        </div>
      </dl>
      <NuxtLink to="/" class="mt-6 inline-block text-sm font-medium text-blue-700">Back to home</NuxtLink>
    </div>
  </section>
</template>
