import * as formValidation from './form-validation';
import * as taxonomyRoutes from './taxonomy-routes';

export { formValidation, taxonomyRoutes };
export * from './form-validation';
export * from './taxonomy-routes';

export const useProjectUtils = () => ({
  ...formValidation,
  ...taxonomyRoutes
});