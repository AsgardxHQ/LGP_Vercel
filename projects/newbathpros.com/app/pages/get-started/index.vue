<template>
  <div>Get started <span class="text-lg text-purple-600 font-bold">{{ zipcode }}</span>
    <div>{{ data.category }} / {{ data.subcategory }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const zipcode = String(route.query.zipcode || '');
const data = collectData();
// direct/refreshed entry has no in-memory state, so fall back to the query
if (!data.value.subcategory && route.query.subcategory) {
  data.value.subcategory = String(route.query.subcategory);
}
</script>
