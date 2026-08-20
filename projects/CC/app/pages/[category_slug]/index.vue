<script setup lang="ts">
import { computed, type Component } from 'vue';
import CategoryBathroomView from '../../components/category/CategoryBathroomView.vue';
import CategoryKitchenView from '../../components/category/CategoryKitchenView.vue';
import CategoryRoofingView from '../../components/category/CategoryRoofingView.vue';
import CategoryFlooringView from '../../components/category/CategoryFlooringView.vue';
import CategoryWindowsView from '../../components/category/CategoryWindowsView.vue';
import CategorySidingView from '../../components/category/CategorySidingView.vue';
import CategoryGuttersView from '../../components/category/CategoryGuttersView.vue';
import CategoryGenericView from '../../components/category/CategoryGenericView.vue';

definePageMeta({
  layout: false
});

const { categorySlug } = useTaxonomyRoute();

const categoryViews: Record<string, Component> = {
  bathroom: CategoryBathroomView,
  kitchen: CategoryKitchenView,
  roofing: CategoryRoofingView,
  flooring: CategoryFlooringView,
  windows: CategoryWindowsView,
  siding: CategorySidingView,
  gutters: CategoryGuttersView
};

const view = computed(() => (categorySlug.value && categoryViews[categorySlug.value]) || CategoryGenericView);
</script>

<template>
  <div class="cc-site bg-[var(--cc-cream)] text-[var(--cc-charcoal)]">
    <component :is="view" />
    <LandingSiteFooter />
  </div>
</template>
