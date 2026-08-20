import { getRunningProjectLink } from '../../utils/project-process'
import { getProjectPath } from '../../utils/project-paths'
import { listProjectNames } from '../../utils/project-assets'
import { isProcessManagementSupported } from '../../utils/environment'

export default defineEventHandler(async () => {
  const names = await listProjectNames()

  return Promise.all(names.map(async (name) => ({
    name,
    // Running dev-server links only exist on a self-hosted/local process host.
    link: isProcessManagementSupported() ? await getRunningProjectLink(getProjectPath(name)) : null
  })))
});