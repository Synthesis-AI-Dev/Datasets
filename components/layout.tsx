import React from 'react'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1><a href="https://synthesis-ai-dev.github.io/open-synthetics/">Synthesis AI Open Dataset</a></h1>
        <Image width={1919/10} height={469/10} src="/img/logo.png" alt="Logo" />
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