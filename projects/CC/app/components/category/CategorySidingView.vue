<script setup lang="ts">
import { getCategoryContent } from '../../utils/category-content';
import CategoryPageSections from './CategoryPageSections.vue';

const content = getCategoryContent('siding');
</script>

<template>
  <CategoryPageSections :content="content" />
</template>
