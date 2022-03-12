import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const linkPrefix = publicRuntimeConfig.linkPrefix;