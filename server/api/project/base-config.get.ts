import { readBaseConfig } from '../../utils/project-assets';

export default defineEventHandler(async () => {
  return readBaseConfig();
});
