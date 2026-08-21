export type TaxonomyCategory = {
  name: string;
  id?: string;
  subcategories: string[];
};

export const slugify = (value: string) => value
  .trim()
  .toLowerCase()
  .replace(/&/g, ' and ')
  .replace(/[_\s]+/g, '-')
  .replace(/[^a-z0-9-]+/g, '')
  .replace(/-+/g, '-')
  .replace(/^-+|-+$/g, '');

export const findCategoryBySlug = <T extends TaxonomyCategory>(categories: T[], key: string) => {
  const slug = slugify(key);
  return categories.find((category) => slugify(category.name) === slug || category.id === key);
};

export const findSubcategoryBySlug = (category: TaxonomyCategory | undefined, key: string) => {
  const slug = slugify(key);
  return category?.subcategories.find((subcategory) => slugify(subcategory) === slug);
};

export const categoryPath = (categoryName: string) => `/${slugify(categoryName)}`;

export const subcategoryPath = (categoryName: string, subcategoryName: string) =>
  `${categoryPath(categoryName)}/${slugify(subcategoryName)}`;

const routeParam = (value: unknown) => {
  if (Array.isArray(value)) return typeof value[0] === 'string' ? value[0] : undefined;
  return typeof value === 'string' ? value : undefined;
};

export const resolveTaxonomyRoute = <T extends TaxonomyCategory>(
  params: Record<string, unknown>,
  categories: T[] = [],
  query: Record<string, unknown> = {}
) => {
  const categoryKey = routeParam(params.category ?? params.category_slug ?? params.category_id ?? query.category);
  const subcategoryKey = routeParam(
    params.subcategory ?? params.subcategory_slug ?? params.subcategory_id ?? query.subcategory
  );
  const category = categoryKey ? findCategoryBySlug(categories, categoryKey) : undefined;
  const subcategory = findSubcategoryBySlug(category, subcategoryKey ?? '');

  return {
    category,
    subcategory,
    categorySlug: category ? slugify(category.name) : undefined,
    subcategorySlug: subcategory ? slugify(subcategory) : undefined
  };
};
