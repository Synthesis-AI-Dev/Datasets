import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1><a href="https://synthesis-ai-dev.github.io/open-synthetics/">Synthesis AI Open Dataset</a></h1>
        <img src="/img/logo.png" alt="Logo" />
        <p></p>
        <p className="view"><a href="https://github.com/Synthesis-AI-Dev/open-synthetics">View the Project on GitHub
          <small>Synthesis-AI-Dev/open-synthetics</small></a></p>
      </header>
      <section>
        {children}
      </section>
      <footer>
        <p>This project is maintained by <a href="https://github.com/Synthesis-AI-Dev">Synthesis-AI-Dev</a></p>
      </footer>
    </>
  )
}