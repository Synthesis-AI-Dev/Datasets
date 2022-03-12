import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const linkPrefix = publicRuntimeConfig.linkPrefix;


export function imageLoader({ src } : {src: string}) {
  return `${linkPrefix}/img/${src}`; 
}

