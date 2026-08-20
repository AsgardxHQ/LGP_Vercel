import { listTemplateComponents } from '../../utils/project-assets';

export default defineEventHandler(async () => {
  return listTemplateComponents();
});
