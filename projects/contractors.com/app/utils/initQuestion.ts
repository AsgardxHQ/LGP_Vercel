import baseConfigRaw from '../base.conf?raw';
import taxonomy from '../../HI_taxonomy.json';

const baseConfig = JSON.parse(baseConfigRaw);

export const initQuestion = async () => {
  return { 
    baseConfig,
    taxonomy
  };
};