import { computed } from 'vue';
import { flowPageIndex, flowPages, pathForPageName, siteTaxonomy, type FlowPageName } from './page-flow';
import { resolveTaxonomyRoute } from './taxonomy-routes';

export type FlowAnswers = {
  zipcode: string;
  category: string;
  categoryId: string;
  subcategory: string;
  ownership: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

export const useFlowAnswers = () => useState<FlowAnswers>('cc-flow-answers', () => ({
  zipcode: '',
  category: '',
  categoryId: '',
  subcategory: '',
  ownership: '',
  fullName: '',
  email: '',
  phone: '',
  address: ''
}));

export const usePageFlow = (currentName: FlowPageName) => {
  const router = useRouter();
  const route = useRoute();
  const answers = useFlowAnswers();

  const routeTaxonomy = resolveTaxonomyRoute(route.params, siteTaxonomy.categories, route.query);
  if (routeTaxonomy.category) {
    answers.value.category = routeTaxonomy.category.name;
    answers.value.categoryId = routeTaxonomy.category.id;
  }
  if (routeTaxonomy.subcategory) answers.value.subcategory = routeTaxonomy.subcategory;

  const currentIndex = flowPageIndex(currentName);
  const nextPage = computed(() => {
    let nextIndex = currentIndex + 1;
    while (
      nextIndex < flowPages.length &&
      ((flowPages[nextIndex].name === 'categories' && answers.value.category) ||
        (flowPages[nextIndex].name === 'subcategories' && answers.value.subcategory))
    ) {
      nextIndex += 1;
    }
    return flowPages[nextIndex];
  });

  const previousPage = computed(() => flowPages[currentIndex - 1]);

  const goNext = () => {
    if (!nextPage.value) return undefined;
    return router.push({ path: pathForPageName(nextPage.value.name, answers.value), query: route.query });
  };

  const goPrevious = () => {
    if (!previousPage.value) return undefined;
    return router.push({ path: pathForPageName(previousPage.value.name, answers.value), query: route.query });
  };

  return { nextPage, previousPage, goNext, goPrevious };
};
