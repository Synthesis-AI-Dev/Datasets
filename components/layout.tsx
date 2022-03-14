import React from 'react'
import Image from 'next/image'
import { mainPageURL, title, saiGithubUserName, saiGithubURL, repoName } from '../config'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content"><a href="https://synthesis.ai/" className="header-logo">
            <object type="image/svg+xml" data="https://synthesis.ai/wp/wp-content/uploads/2021/03/logo.svg" width="187" height="47"></object>
          </a>
          </div>
        </div>
      </header>
      <div className='container'>
        <section>
          <h1><a href={mainPageURL}>{title}</a></h1>
          {children}
        </section>
        <footer>
          <p>This project is maintained by <a href={saiGithubURL}>{saiGithubUserName}</a></p>
          <p className="view"><a href={`${saiGithubURL}/${repoName}`}>View the Project on GitHub
            <small>{saiGithubUserName}/{repoName}</small></a></p>
        </footer>
      </div>
    </>
  )
}