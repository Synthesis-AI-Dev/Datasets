/**
 * Copied from https://github.com/vercel/next.js/issues/3335#issuecomment-489354854
 * Higher order component, which is based on 'next/link'
 * When app is deployed on github pages repository which is not the main one
 * e.g https://username.github.io/repository/
 * standard 'next/link' is not wokring properly, it doesn't add the 'reporsitory'
 * to url so instead of expected 'https://username.github.io/repository/about',
 * it would be 'https://username.github.io/about/
 * This HOC solves the problem, by adding the prefix (which is defined in next.config.js)
 * to 'as' property
 */
import Link from 'next/link';
import React from 'react';
import { linkPrefix } from '../services/run-time';


const PrefixedLink = ({ href, children }: {href: string, children:React.ReactNode}) => (
  <Link href={href} as={`${linkPrefix}${href}`}>
    {children}
  </Link>
);

export default PrefixedLink;