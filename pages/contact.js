import React from 'react'
import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { Button, Card } from 'components'
import { ContactForm } from 'components/ContactForm'

const CardContent = styled.div`
  max-width: 450px;
  margin: 0 auto;
`

const CardLinkWrapper = styled.a`
  display: flex;
`

const CardDividerText = styled.div`
  flex: 1;
  font-family: SourceCP, sans-serif;
  text-align: center;
`

function Contact() {
  return (
    <Card>
      <CardContent>
        <ContactForm />
        <CardDividerText>— OR —</CardDividerText>
        <CardLinkWrapper href="https://calendly.com/tafka-labs">
          <Button>
            Request a call <ReactSVG src="/static/svg/newtab.svg" />
          </Button>
        </CardLinkWrapper>
      </CardContent>
    </Card>
  )
}

export default Contact
