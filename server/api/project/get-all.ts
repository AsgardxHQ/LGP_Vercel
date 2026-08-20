import { getRunningProjectLink } from '../../utils/project-process'
import { getProjectPath } from '../../utils/project-paths'
import { listProjectNames } from '../../utils/project-assets'
import { isProcessManagementSupported } from '../../utils/environment'
import { getVercelProjectLinks } from '../../utils/vercel'

export default defineEventHandler(async () => {
  const names = await listProjectNames()

  const [devLinks, vercelLinks] = await Promise.all([
    // Running dev-server links only exist on a self-hosted/local process host.
    isProcessManagementSupported()
      ? Promise.all(names.map((name) => getRunningProjectLink(getProjectPath(name))))
      : Promise.resolve(names.map(() => null)),
    getVercelProjectLinks(names)
  ])

  return names.map((name, index) => ({
    name,
    link: devLinks[index] ?? vercelLinks[name] ?? null
  }))
});