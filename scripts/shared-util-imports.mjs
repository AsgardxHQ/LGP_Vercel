import { join } from 'node:path';

// Exact named exports auto-imported from the shared utils source, matching the
// files copied by scripts/sync-utils.mjs (form-validation.ts, taxonomy-routes.ts,
// lead-submission.ts). Declaring these explicitly (instead of `imports.dirs`
// scanning the whole source folder) prevents root-only files that also live in
// that folder in LGP_SHARED_SOURCE=root dev mode (e.g. usePageFlow.ts) from
// silently shadowing a project's own same-named exports.
export const sharedUtilImports = (sharedSource) => [
  { name: 'isValidZipcode', from: join(sharedSource, 'form-validation') },
  { name: 'sanitizeZipInput', from: join(sharedSource, 'form-validation') },
  { name: 'normalizeFullName', from: join(sharedSource, 'form-validation') },
  { name: 'isValidFullName', from: join(sharedSource, 'form-validation') },
  { name: 'isValidEmail', from: join(sharedSource, 'form-validation') },
  { name: 'formatUsPhone', from: join(sharedSource, 'form-validation') },
  { name: 'isValidUsPhone', from: join(sharedSource, 'form-validation') },
  { name: 'isNonEmpty', from: join(sharedSource, 'form-validation') },
  { name: 'slugify', from: join(sharedSource, 'taxonomy-routes') },
  { name: 'findCategoryBySlug', from: join(sharedSource, 'taxonomy-routes') },
  { name: 'findSubcategoryBySlug', from: join(sharedSource, 'taxonomy-routes') },
  { name: 'categoryPath', from: join(sharedSource, 'taxonomy-routes') },
  { name: 'subcategoryPath', from: join(sharedSource, 'taxonomy-routes') },
  { name: 'resolveTaxonomyRoute', from: join(sharedSource, 'taxonomy-routes') },
  { name: 'TaxonomyCategory', from: join(sharedSource, 'taxonomy-routes'), type: true },
  { name: 'submitLead', from: join(sharedSource, 'lead-submission') },
  { name: 'LeadAnswers', from: join(sharedSource, 'lead-submission'), type: true }
];
