import baseConfigRaw from '../base.conf?raw';
import taxonomy from '#shared-taxonomy';

const baseConfig = JSON.parse(baseConfigRaw);

export const initQuestion = async () => {
  return { 
    baseConfig,
    taxonomy
  };
};