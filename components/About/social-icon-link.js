import React from 'react'
import styled from 'styled-components'

import StyledSVG from '../styled-svg'

const SocialLink = styled.a`
  color: inherit;
  display: block;
`

const SocialIconLink = ({ href, src, alt }) => (
  <SocialLink href={href}>
    <StyledSVG src={src} alt={alt} />
  </SocialLink>
)

export default SocialIconLink
