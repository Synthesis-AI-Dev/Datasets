import React from 'react'
import Image from 'next/image'
import { mainPageURL, title, saiGithubUserName, saiGithubURL, repoName } from '../config'
import { imageLoader } from '../services/loaders'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1><a href={mainPageURL}>{title}</a></h1>
        <Image loader={imageLoader} width={1919/10} height={469/10} src="logo.png" alt="Logo" />
        <p></p>
        <p className="view"><a href={`${saiGithubURL}/${repoName}`}>View the Project on GitHub
          <small>{saiGithubUserName}/{repoName}</small></a></p>
      </header>
      <section>
        {children}
      </section>
      <footer>
        <p>This project is maintained by <a href={saiGithubURL}>{saiGithubUserName}</a></p>
      </footer>
    </>
  )
}