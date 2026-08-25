<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { CategoryContent } from '../../utils/category-content';
import { fallbackImage } from '../../utils/category-content';
import { useTaxonomyRoute } from '../../composables/useTaxonomyRoute';
import { useFlowAnswers } from '../../utils/usePageFlow';
import { findSubcategoryId } from '../../utils/site-taxonomy';

const props = defineProps<{ content: CategoryContent }>();

const answers = useFlowAnswers();
const { category } = useTaxonomyRoute();
const questionModalOpen = ref(false);

const services = computed(() =>
  (category.value?.subcategories ?? []).slice(0, 6).map((name, index) => ({
    name,
    image: props.content.serviceImages[index % props.content.serviceImages.length] ?? fallbackImage
  }))
);

const brokenByName = reactive<Record<string, boolean>>({});

const selectSubcategory = (name: string) => {
  if (!category.value) return;
  answers.value.category = category.value.name;
  answers.value.categoryId = category.value.id;
  answers.value.subcategory = name;
  answers.value.subcategoryId = findSubcategoryId(category.value.sourceName, name);
  questionModalOpen.value = true;
};
</script>

<template>
  <section id="category-services" class="cc-section py-16 md:py-24">
    <div class="cc-container">
      <h2 class="text-center text-3xl font-bold md:text-4xl">{{ content.servicesTitle }}</h2>
      <p class="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--cc-ink-soft)]">{{ content.servicesSubtitle }}</p>

      <div v-if="services.length" class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="service in services"
          :key="service.name"
          type="button"
          class="group overflow-hidden rounded-xl border border-black/10 bg-white text-left transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,22,33,0.12)]"
          @click="selectSubcategory(service.name)"
        >
          <div class="relative">
            <img
              :src="brokenByName[service.name] ? fallbackImage : service.image"
              :alt="service.name"
              class="h-40 w-full object-cover"
              @error="brokenByName[service.name] = true"
            />
            <span
              class="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold shadow-md transition group-hover:bg-[var(--cc-yellow)]"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </div>
          <div class="p-4">
            <h3 class="text-sm font-semibold">{{ service.name }}</h3>
            <p class="mt-2 text-xs leading-relaxed text-[var(--cc-ink-soft)]">
              Get matched with pros who handle {{ service.name.toLowerCase() }} work every week.
            </p>
          </div>
        </button>
      </div>

      <p v-else class="mx-auto mt-10 max-w-xl rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-800">
        We could not match this category from taxonomy.
      </p>
    </div>

    <LandingQuestionModal :open="questionModalOpen" @close="questionModalOpen = false" />
  </section>
</template>
