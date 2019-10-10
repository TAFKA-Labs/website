import React from 'react'
import Link from 'next/link'

function Projects() {
  return (
    <div>
      <p>Placeholder for Projects page</p>
      <Link href="/projects/[slug]" as={`/projects/do-the-thing`}>
        <a>Do the thing</a>
      </Link>
    </div>
  )
}

export default Projects
