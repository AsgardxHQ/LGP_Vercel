type LeadAnswers = Record<string, string>;

const asString = (value: unknown) => {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return null;
};

const normalizeAnswers = (value: unknown): LeadAnswers | null => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return null;

  const entries = Object.entries(value);
  if (entries.length === 0 || entries.length > 30) return null;

  const answers: LeadAnswers = {};
  for (const [key, rawValue] of entries) {
    if (!/^[A-Za-z][A-Za-z0-9_]{0,63}$/.test(key)) return null;
    const normalizedValue = asString(rawValue);
    if (normalizedValue === null || normalizedValue.length > 1_000) return null;
    answers[key] = normalizedValue;
  }
  return answers;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<{ site?: unknown; answers?: unknown }>(event);
  const site = typeof body?.site === 'string' ? body.site.trim() : '';
  const answers = normalizeAnswers(body?.answers);

  if (!/^[A-Za-z0-9.-]{1,100}$/.test(site) || !answers) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid lead payload' });
  }

  const config = useRuntimeConfig();
  const webhookUrl = config.leadWebhookUrl as string;
  const apiKey = config.leadApiKey as string;
  if (!webhookUrl) {
    throw createError({ statusCode: 503, statusMessage: 'Lead delivery is not configured' });
  }

  let response: Response;
  try {
    response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {})
      },
      body: JSON.stringify({
        site,
        answers,
        submittedAt: new Date().toISOString(),
        source: {
          origin: getRequestHeader(event, 'origin') || null,
          userAgent: getRequestHeader(event, 'user-agent') || null
        }
      })
    });
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Lead delivery is unavailable' });
  }

  if (!response.ok) {
    throw createError({ statusCode: 502, statusMessage: 'Lead delivery failed' });
  }

  return { success: true };
});