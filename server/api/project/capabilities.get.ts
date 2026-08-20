import { isProcessManagementSupported } from '../../utils/environment';

export default defineEventHandler(() => ({
  processManagement: isProcessManagementSupported()
}));
