// Resolves each project's public URL via the Vercel REST API, so the
// dashboard can link to live deployments even on stateless hosts (Vercel
// itself) where there's no local dev-server process to inspect.
type VercelDeployment = {
  url: string;
  target?: string | null;
  readyState?: string;
};

type VercelProject = {
  id: string;
  name: string;
  rootDirectory?: string | null;
  latestDeployments?: VercelDeployment[];
};

type VercelDomain = {
  name: string;
  verified?: boolean;
};

const VERCEL_API_BASE = 'https://api.vercel.com';
const CACHE_TTL_MS = 60_000;

let cachedProjects: { expiresAt: number; projects: VercelProject[] } | null = null;

const vercelFetch = async <T>(path: string, token: string, teamId?: string): Promise<T> => {
  const url = new URL(`${VERCEL_API_BASE}${path}`);
  if (teamId) url.searchParams.set('teamId', teamId);

  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) {
    throw createError({ statusCode: response.status, statusMessage: `Vercel API error: ${response.statusText}` });
  }
  return response.json() as Promise<T>;
};

const listVercelProjects = async (token: string, teamId?: string) => {
  if (cachedProjects && cachedProjects.expiresAt > Date.now()) return cachedProjects.projects;

  const data = await vercelFetch<{ projects: VercelProject[] }>('/v9/projects?limit=100', token, teamId);
  cachedProjects = { expiresAt: Date.now() + CACHE_TTL_MS, projects: data.projects ?? [] };
  return cachedProjects.projects;
};

const normalizeProjectName = (name: string) => name.trim().toLowerCase();

// This is a monorepo: each project/<name> folder is deployed as its own
// Vercel project with rootDirectory set to "projects/<name>", while Vercel's
// own project name is auto-generated (e.g. "lgp-vercel-ew33") and unrelated.
const normalizeRootDirectory = (rootDirectory: string) => rootDirectory.trim().toLowerCase().replace(/^\/|\/$/g, '');

const findCustomDomain = async (projectId: string, token: string, teamId?: string) => {
  try {
    const data = await vercelFetch<{ domains: VercelDomain[] }>(`/v9/projects/${projectId}/domains`, token, teamId);
    return data.domains?.find((domain) => domain.verified && !domain.name.endsWith('.vercel.app'))?.name ?? null;
  } catch {
    return null;
  }
};

const getRuntimeVercelConfig = () => {
  const config = useRuntimeConfig();
  return { token: config.vercelApiToken as string, teamId: config.vercelTeamId as string };
};

export const isVercelIntegrationConfigured = () => Boolean(getRuntimeVercelConfig().token);

export const getVercelProjectLinks = async (projectNames: string[]): Promise<Record<string, string | null>> => {
  const { token, teamId } = getRuntimeVercelConfig();
  if (!token) return Object.fromEntries(projectNames.map((name) => [name, null]));

  const vercelProjects = await listVercelProjects(token, teamId);
  const byRootDirectory = new Map(
    vercelProjects
      .filter((project) => project.rootDirectory)
      .map((project) => [normalizeRootDirectory(project.rootDirectory as string), project])
  );
  const byName = new Map(vercelProjects.map((project) => [normalizeProjectName(project.name), project]));

  const entries = await Promise.all(projectNames.map(async (name) => {
    const project = byRootDirectory.get(`projects/${normalizeProjectName(name)}`) ?? byName.get(normalizeProjectName(name));
    if (!project) return [name, null] as const;

    const customDomain = await findCustomDomain(project.id, token, teamId);
    if (customDomain) return [name, `https://${customDomain}`] as const;

    const productionDeployment = project.latestDeployments?.find(
      (deployment) => deployment.target === 'production' && deployment.readyState === 'READY'
    );
    return [name, productionDeployment ? `https://${productionDeployment.url}` : null] as const;
  }));

  return Object.fromEntries(entries);
};
