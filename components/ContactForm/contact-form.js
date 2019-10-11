import React, { useState } from 'react'
import useForm from 'react-hook-form'

import { Button, Form, Label, TextArea, TextInput } from 'components'

const ContactForm = () => {
  const { register, handleSubmit, errors, formState } = useForm()
  const [status, setStatus] = useState('ready')

  const onSubmit = async data => {
    try {
      await fetch(`${window.location.hostname}/api/mailto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      setStatus('sent')
    } catch (err) {
      setStatus('fail')
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Button disabled={formState.isSubmitting}>
        {status === 'sent' ? 'Message sent!' : 'Send message'}
      </Button>
    </Form>
  )
}

export default ContactForm
