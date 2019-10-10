import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  text-align: right;
  padding: 0 2em;
  opacity: 0.6;
`

const DetailText = styled.div`
  font-size: 0.75em;
  margin: 0.75em;
`

function Footer() {
  return (
    <FooterContainer>
      <DetailText>&copy; TAFKA Labs 2018-2019</DetailText>
    </FooterContainer>
  )
}

export default Footer
