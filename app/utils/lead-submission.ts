export type LeadAnswers = Record<string, unknown>;

export const submitLead = async (site: string, answers: LeadAnswers) => {
  const endpoint = "/api/lead" as string;
  if (!endpoint) return false;

  await $fetch(endpoint, {
    method: 'POST',
    body: { site, answers }
  });
  return true;
};