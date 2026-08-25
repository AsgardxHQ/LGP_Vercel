<script setup>
const answers = useFlowAnswers();

onMounted(async () => {
  try {
    await submitLead('contractors.com', answers.value);
  } catch (error) {
    console.error('Lead submission failed', error);
  }
});
</script>

<template>
  <section class="mx-auto w-full max-w-2xl py-14 text-center">
    <h1 class="text-3xl font-semibold tracking-tight text-gray-950">Thanks, {{ answers.firstName || 'there' }}!</h1>
    <p class="mt-2 text-gray-600">We've received your project details and will connect you with a local pro soon.</p>
  </section>
</template>
