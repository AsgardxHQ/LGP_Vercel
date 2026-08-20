import { computed } from 'vue';
import { resolveTaxonomyRoute } from '../utils/taxonomy-routes';
import { siteTaxonomy } from '../utils/page-flow';

/** Resolves taxonomy entities behind dynamic category routes. */
export const useTaxonomyRoute = () => {
  const route = useRoute();
  const resolved = computed(() => resolveTaxonomyRoute(route.params, siteTaxonomy.categories, route.query));

  return {
    category: computed(() => resolved.value.category),
    subcategory: computed(() => resolved.value.subcategory),
    categorySlug: computed(() => resolved.value.categorySlug),
    subcategorySlug: computed(() => resolved.value.subcategorySlug)
  };
};