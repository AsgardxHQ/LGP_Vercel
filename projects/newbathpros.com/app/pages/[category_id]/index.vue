<template>
  <div>category</div>
</template>

<script setup>
definePageMeta({
  validate: (route) => !route.path.includes('/form/')
});
</script>
