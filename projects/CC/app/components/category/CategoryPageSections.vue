<script setup lang="ts">
import type { CategoryContent } from '../../utils/category-content';
import CategoryHeroSection from './CategoryHeroSection.vue';
import CategoryServicesSection from './CategoryServicesSection.vue';
import CategoryStepsSection from './CategoryStepsSection.vue';
import CategoryZipBandSection from './CategoryZipBandSection.vue';
import CategoryBenefitsSection from './CategoryBenefitsSection.vue';
import CategoryGallerySection from './CategoryGallerySection.vue';
import CategoryQuoteSection from './CategoryQuoteSection.vue';
import CategoryTestimonialsSection from './CategoryTestimonialsSection.vue';

defineProps<{ content: CategoryContent }>();
</script>

<template>
  <div>
    <CategoryHeroSection :content="content" />
    <CategoryServicesSection :content="content" />
    <CategoryStepsSection :content="content" />
    <CategoryZipBandSection :content="content" />
    <CategoryBenefitsSection :content="content" />
    <CategoryGallerySection :content="content" />
    <CategoryQuoteSection :content="content" />
    <CategoryTestimonialsSection :content="content" />
  </div>
</template>
