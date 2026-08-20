<script setup lang="ts">
import { computed } from 'vue';
import { getCategoryContent } from '../../utils/category-content';
import { useTaxonomyRoute } from '../../composables/useTaxonomyRoute';
import CategoryPageSections from './CategoryPageSections.vue';

const { categorySlug } = useTaxonomyRoute();
const content = computed(() => getCategoryContent(categorySlug.value));
</script>

<template>
  <CategoryPageSections :content="content" />
</template>
