import { categoryPath } from '@/utils';
import { siteFlowConfig } from './site-taxonomy';
import type { FlowAnswers } from './usePageFlow';

export type FlowPageName =
  | 'home'
  | 'zipcode'
  | 'categories'
  | 'subcategories'
  | 'ownership'
  | 'fullname'
  | 'email'
  | 'phone'
  | 'address'
  | 'thank_you';

export type FlowPage = {
  name: FlowPageName;
};

export const flowPages: FlowPage[] = [
  { name: 'home' },
  { name: 'zipcode' },
  { name: 'categories' },
  { name: 'subcategories' },
  { name: 'ownership' },
  { name: 'fullname' },
  { name: 'email' },
  { name: 'phone' },
  { name: 'address' },
  { name: 'thank_you' }
];

export const flowPageIndex = (name: FlowPageName) => flowPages.findIndex((page) => page.name === name);

export const pathForPageName = (name: FlowPageName, answers: FlowAnswers) => {
  if (name === 'home') return '/';
  if (name === 'zipcode') return '/form/zipcode';
  if (name === 'categories') return '/form/categories';
  if (name === 'subcategories') {
    if (answers.category) return categoryPath(answers.category);
    return '/form/categories';
  }
  if (name === 'ownership') return '/form/ownership';
  if (name === 'fullname') return '/form/name';
  if (name === 'email') return '/form/email';
  if (name === 'phone') return '/form/phone';
  if (name === 'address') return '/form/address';
  return '/thank-you';
};

export const siteTaxonomy = siteFlowConfig;
