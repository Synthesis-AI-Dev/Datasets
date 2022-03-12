import { linkPrefix } from "./run-time";

export function imageLoader({ src } : {src: string}) {
  return `${linkPrefix}/img/${src}`; 
}