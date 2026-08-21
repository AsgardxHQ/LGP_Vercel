import taxonomy from '../../HI_taxonomy.json';

let baseConfigPromise: Promise<unknown> | undefined;

export const initQuestion = async () => {
  baseConfigPromise ??= $fetch('/api/project/base-config', { method: 'GET' });
  const baseConfig = await baseConfigPromise;

  return { 
    baseConfig,
    taxonomy
  };
};