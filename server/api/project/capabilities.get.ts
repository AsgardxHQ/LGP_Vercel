import { isProcessManagementSupported } from '../../utils/environment';
import { isVercelIntegrationConfigured } from '../../utils/vercel';

export default defineEventHandler(() => ({
  processManagement: isProcessManagementSupported(),
  vercelIntegration: isVercelIntegrationConfigured()
}));
