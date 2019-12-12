import React from 'react'
import { arrayOf, shape, number, string } from 'prop-types'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'
import format from 'date-fns/format'
import 'isomorphic-unfetch'

import { Card } from 'components'

const CardContent = styled(Card)`
  display: block;

  > div:first-of-type {
    margin: 0;
  }

  @media (min-width: 380px) {
    display: flex;

    > div:first-of-type {
      margin-top: 1.5em;
      margin-right: 1.5em;
    }
  }
`

const CardInfo = styled.div`
  width: 100%;
`

const CardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 380px) {
    justify-content: space-between;
  }
`

const StyledDate = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.typography.accent}, Helvetica, serif;
  font-weight: bolder;
  opacity: 0.4;
`

const Tag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.25em;
  margin-left: 0.5em;
  margin-top: 0.5em;

  @media (min-width: 380px) {
    margin-right: 0.5em;
  }
`

const Alert = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.warning};
  padding: 0.25em;
  margin-bottom: 1em;
`

const CardTypeWrapper = ({ name, type, url, children }) => {
  switch (type) {
    case 'github':
      return (
        <Link key={name} href="/projects/[slug]" as={`/projects/${name}`}>
          <a>{children}</a>
        </Link>
      )
    default:
      return <a href={url}>{children}</a>
  }
}

const projectProps = {
  name: string.isRequired,
  type: string.isRequired,
  size: number.isRequired,
  description: string.isRequired,
  date: string.isRequired,
  tags: arrayOf(string),
  alert: string,
  url: string,
}

const ProjectCard = ({
  name,
  type,
  size,
  description,
  date,
  tags,
  alert,
  url,
}) => {
  return (
    <CardTypeWrapper name={name} type={type} url={url}>
      <CardContent>
        <ReactSVG src={`/svg/${type}.svg`} />
        <CardInfo>
          <h4>
            {url && (
              <ReactSVG
                src="/svg/newtab.svg"
                wrapper="span"
                beforeInjection={svg => {
                  svg.setAttribute(
                    'style',
                    'display: inline-block; margin-right: 0.5em; vertical-align: bottom;'
                  )
                }}
              />
            )}
            {name || 'unnamed project'}
          </h4>
          <p>{description || 'no description provided'}</p>
          {alert && <Alert>Warning: {alert}</Alert>}
          <CardDetails>
            <StyledDate>
              {format(new Date(date), 'd LLL, yyyy')} {url && `(${size} hrs)`}
            </StyledDate>
            <span>
              {tags.map(t => (
                <Tag key={t}>{t}</Tag>
              ))}
            </span>
          </CardDetails>
        </CardInfo>
      </CardContent>
    </CardTypeWrapper>
  )
}

ProjectCard.propTypes = projectProps

function Projects({ projects, error }) {
  if (error) return <p>{error}</p>

  return (
    <>
      {projects.length > 0 ? (
        projects.map(p => <ProjectCard key={p.name} {...p} />)
      ) : (
        <p>No projects found...</p>
      )}
    </>
  )
}

Projects.propTypes = {
  error: string,
  projects: arrayOf(shape(projectProps)).isRequired,
}

Projects.getInitialProps = async ({ req }) => {
  // Prevent unnecessary refetching
  if (process.browser) {
    const { projects } = window.__NEXT_DATA__.props.pageProps
    if (projects && projects.length > 0) {
      return { projects }
    }
  }
  try {
    // Have the correct API uri
    const pre = req
      ? `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers[
          'x-forwarded-host'
        ] || req.headers.host}`
      : ''
    const dirname = process.cwd()
    console.log('dirname? ', dirname)
    const result = await fetch(`${pre}/api/get-projects`)
    const { projects, error } = await result.json()
    if (error) {
      throw new Error(error)
    }
    return { projects }
  } catch (err) {
    return {
      projects: [],
      error: err.message || 'Unavailable. Refresh page?',
    }
  }
}

export default Projects
