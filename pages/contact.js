import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  FormField,
  Grid,
  Heading,
  TextArea,
  Select,
} from 'grommet'
import { Share } from 'grommet-icons'

function Contact() {
  const [status, setStatus] = useState('ready')

  const onSubmit = async ({ value, touched }) => {
    if (!Object.values(touched).every(x => x)) {
      return
    }

    try {
      setStatus('sending')
      const response = await fetch('/api/mailto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      })
      if (response.error) {
        throw new Error('Message send failed, try again?')
      }
      console.log('response? ', response)
      setStatus('sent')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <Box pad="medium" margin="medium">
      <Heading level={4} textAlign="center">
        Send a note
      </Heading>
      <Form onSubmit={onSubmit}>
        <Grid columns="auto" gap="small">
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="demo@example.com"
            required
          />
          <FormField
            label="Subject"
            name="subject"
            placeholder="Choose one:"
            component={Select}
            onChange={event => console.log(event)}
            options={[
              'Consulting request',
              'Workshop request',
              'Project question',
            ]}
          />

          <FormField
            label="Message"
            name="message"
            placeholder="How can I help?"
            component={TextArea}
          />
          <Button
            primary
            type="submit"
            disabled={status !== 'ready'}
            label={
              status === 'sent'
                ? 'Message sent!'
                : status === 'sending'
                ? '...'
                : 'Send message'
            }
          />
        </Grid>
      </Form>
      <Heading level={4} textAlign="center">
        - or -
      </Heading>
      <Button
        primary
        type="submit"
        icon={<Share size="small" />}
        label="Schedule call"
        reverse
      />
    </Box>
  )
}

export default Contact
