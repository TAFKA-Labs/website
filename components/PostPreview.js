import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Pill, PostTitle, RowContent } from '../components'

const PreviewContainer = styled.div`
  padding: 1em;
  margin: 2em auto 0;

  &:hover {
    background-color: rgba(50, 50, 50, 0.05);
  }
`

export default ({ id, title, abstract, tags, date }) => (
  <Link href={{ pathname: '/post', query: { postId: id } }} passHref>
    <PreviewContainer>
      <h2 style={{ color: '#2e6d86', fontWeight: 'bolder', marginTop: 0 }}>
        {title}
      </h2>
      <p>{abstract}</p>
      <RowContent>
        <div>
          {tags.map(tag => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <h6 style={{ margin: 0 }}>{date}</h6>
      </RowContent>
    </PreviewContainer>
  </Link>
)
