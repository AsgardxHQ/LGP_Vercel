<script setup lang="ts">
const route = useRoute()
const isThankYouPage = computed(() => route.path === '/thank-you')
</script>

<template>
  <div v-if="isThankYouPage" class="min-h-screen bg-white">
    <slot />
  </div>
  <div v-else class="flex min-h-screen flex-col">
    <AppHeader />
    <div class="flex flex-1">
      <main class="flex-1 bg-gray-100 p-5">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>