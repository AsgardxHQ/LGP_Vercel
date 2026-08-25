import hiTaxonomy from '#shared-taxonomy';

export type SiteCategory = {
  name: string;
  id: string;
  sourceName: string;
  subcategories: string[];
};

export type SiteQuestion = {
  id: string;
  label: string;
  type: 'text' | 'select';
  options?: string[];
};

export type SiteFlowConfig = {
  categories: SiteCategory[];
  questions: SiteQuestion[];
};

type HiSubcategory = {
  id: string;
  name: string;
};

type HiCategory = {
  id: string;
  name: string;
  subCategories?: HiSubcategory[];
};

type HiQuestionAnswer = {
  text: string;
};

type HiQuestion = {
  name: string;
  answers?: HiQuestionAnswer[];
};

const hiCategories = (hiTaxonomy.categories ?? []) as HiCategory[];
const hiQuestions = (hiTaxonomy.questions ?? []) as HiQuestion[];

const findCategory = (name: string) => hiCategories.find((category) => category.name === name);

const subcategoryNames = (categoryName: string) =>
  findCategory(categoryName)?.subCategories?.map((subcategory) => subcategory.name) ?? [];

/** Looks up a subcategory's taxonomy id by its parent category source name and subcategory name. */
export const findSubcategoryId = (categorySourceName: string, subcategoryName: string) =>
  findCategory(categorySourceName)?.subCategories?.find((subcategory) => subcategory.name === subcategoryName)?.id ?? '';

const roofingSubcategories = subcategoryNames('Roofing');
const gutterSubcategories = roofingSubcategories.filter((name) => /gutter/i.test(name));
const roofingOnlySubcategories = roofingSubcategories.filter((name) => /gutter/i.test(name) === false);

const ownershipQuestion = hiQuestions.find((question) => question.name === 'HomeOwnership');

export const siteFlowConfig: SiteFlowConfig = {
  categories: [
    {
      name: 'Bathroom',
      id: findCategory('Bathroom Remodeling')?.id ?? '63',
      sourceName: 'Bathroom Remodeling',
      subcategories: subcategoryNames('Bathroom Remodeling')
    },
    {
      name: 'Kitchen',
      id: findCategory('Kitchen Remodeling')?.id ?? '82',
      sourceName: 'Kitchen Remodeling',
      subcategories: subcategoryNames('Kitchen Remodeling')
    },
    {
      name: 'Roofing',
      id: findCategory('Roofing')?.id ?? '88',
      sourceName: 'Roofing',
      subcategories: roofingOnlySubcategories
    },
    {
      name: 'Flooring',
      id: findCategory('Flooring')?.id ?? '77',
      sourceName: 'Flooring',
      subcategories: subcategoryNames('Flooring')
    },
    {
      name: 'Windows',
      id: findCategory('Windows')?.id ?? '96',
      sourceName: 'Windows',
      subcategories: subcategoryNames('Windows')
    },
    {
      name: 'Siding',
      id: findCategory('Siding')?.id ?? '89',
      sourceName: 'Siding',
      subcategories: subcategoryNames('Siding')
    },
    {
      name: 'Gutters',
      id: `${findCategory('Roofing')?.id ?? '88'}-gutters`,
      sourceName: 'Roofing',
      subcategories: gutterSubcategories
    }
  ],
  questions: [
    {
      id: 'zipcode',
      label: 'Zip code',
      type: 'text'
    },
    {
      id: 'categories',
      label: 'Project type',
      type: 'select'
    },
    {
      id: 'subcategories',
      label: 'What service do you need?',
      type: 'select'
    },
    {
      id: 'ownership',
      label: 'Home ownership',
      type: 'select',
      options: ownershipQuestion?.answers?.map((answer) => answer.text) ?? ['I own this home', 'This is a commercial area']
    },
    {
      id: 'fullname',
      label: 'Full name',
      type: 'text'
    },
    {
      id: 'email',
      label: 'Email',
      type: 'text'
    },
    {
      id: 'phone',
      label: 'Phone',
      type: 'text'
    },
    {
      id: 'address',
      label: 'Project address',
      type: 'text'
    }
  ]
};
