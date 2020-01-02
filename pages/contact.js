import React from 'react'
import { ReactSVG } from 'react-svg'

import { Button, Card } from 'components'
import { ContactForm } from 'components/Forms'
import {
  CardContent,
  CardDividerText,
  ButtonLinkWrapper,
} from 'components/Contact'

function Contact() {
  return (
    <>
      <h2>Send a note</h2>
      <Card>
        <CardContent>
          <ContactForm />
          <CardDividerText>— OR —</CardDividerText>
          <ButtonLinkWrapper href="https://calendly.com/tafka-labs">
            <Button>
              Request a call <ReactSVG src="/svg/newtab.svg" />
            </Button>
          </ButtonLinkWrapper>
        </CardContent>
      </Card>
    </>
  )
}

export default Contact
