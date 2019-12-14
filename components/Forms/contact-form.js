import React, { useEffect, useRef, useState } from 'react'
import useForm from 'react-hook-form'
import Fade from 'react-reveal/Fade'

import Button from '../button'
import Form from './form'
import Label from './label'
import TextArea from './text-area'
import TextInput from './text-input'
import Select from './select'
import StatusContainer from './status-container'

const ContactForm = () => {
  const { register, handleSubmit, errors, formState } = useForm()
  const [status, setStatus] = useState('ready')
  const formContainer = useRef()
  const [height, setHeight] = useState('ready')

  useEffect(() => {
    if (!formContainer.current) {
      return
    }
    setHeight(formContainer.current.offsetHeight)
  }, [height])

  const onSubmit = async data => {
    try {
      setStatus('sending')
      const response = await fetch('/api/mailto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.error) {
        throw new Error('Message send failed, try again?')
      }
      setStatus('sent')
    } catch (err) {
      setStatus(err.message)
    }
  }

  if (status === 'sent') {
    return (
      <Fade>
        <StatusContainer height={height}>
          <p>All set!</p>
        </StatusContainer>
      </Fade>
    )
  }

  if (status === 'sending') {
    return (
      <Fade>
        <StatusContainer height={height}>
          <p>Sending...</p>
        </StatusContainer>
      </Fade>
    )
  }

  if (status === 'ready') {
    return (
      <Form
        onSubmit={handleSubmit(onSubmit)}
        height={height}
        ref={formContainer}
      >
        <Label htmlFor="email" error={!!errors.email}>
          Email
        </Label>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="demo@example.com"
          disabled={status === 'sent'}
          error={!!errors.email}
          ref={register({ required: 'Required' })}
        />
        <Label htmlFor="subject" error={!!errors.subject}>
          Subject
        </Label>
        <Select
          name="subject"
          id="subject"
          error={!!errors.subject}
          ref={register({
            required: 'Required',
          })}
        >
          <option value="">--Please choose an option--</option>
          <option value="Consulting request">Consulting request</option>
          <option value="Project question">Project question</option>
          <option value="Workshop request">Workshop request</option>
        </Select>
        <Label htmlFor="message" error={!!errors.message}>
          Message
        </Label>
        <TextArea
          id="message"
          name="message"
          placeholder="How can I help?"
          disabled={status === 'sent'}
          error={!!errors.message}
          rows="3"
          ref={register({
            required: 'Required',
            minLength: 20,
          })}
        />
        <Button disabled={formState.isSubmitting || status === 'sent'}>
          {status === 'sent' ? 'Message sent!' : 'Send message'}
        </Button>
      </Form>
    )
  }

  return (
    <Fade>
      <StatusContainer height={height}>
        <p>Error: {status}</p>
      </StatusContainer>
    </Fade>
  )
}

export default ContactForm
