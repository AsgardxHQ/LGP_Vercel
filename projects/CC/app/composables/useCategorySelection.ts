import { siteFlowConfig } from '../utils/site-taxonomy';
import { categoryPath, findCategoryBySlug } from '../utils/taxonomy-routes';
import { useFlowAnswers } from '../utils/usePageFlow';

/** Stores the picked category name/id and routes to its landing page. */
export const useCategorySelection = () => {
  const router = useRouter();
  const answers = useFlowAnswers();

  const selectCategory = (key: string) => {
    const category = findCategoryBySlug(siteFlowConfig.categories, key);
    if (!category) return undefined;

    answers.value.category = category.name;
    answers.value.categoryId = category.id;
    answers.value.subcategory = '';

    return router.push(categoryPath(category.name));
  };

  return { selectCategory };
};
