<script setup lang="ts">
import { getCategoryContent } from '../../utils/category-content';
import CategoryPageSections from './CategoryPageSections.vue';

const content = getCategoryContent('roofing');
</script>

<template>
  <CategoryPageSections :content="content" />
</template>
