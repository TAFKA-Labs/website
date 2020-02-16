import React from 'react'
// import useForm from 'react-hook-form'
// import { Stitch, UserPasswordCredential } from 'mongodb-stitch-server-sdk'

// import Button from 'components/button'
// import Form from 'components/Forms/form'
// import Label from 'components/Forms/label'
// import TextInput from 'components/Forms/text-input'

// let client = undefined

function Chat() {
  // const { register, handleSubmit, errors, formState } = useForm()
  // const formContainer = useRef()
  // const [user, setUser] = useState()

  // const onSubmit = async data => {
  //   try {
  //     if (!client) {
  //       client = Stitch.initializeDefaultAppClient(process.env.STITCH_CLIENT)
  //     }
  //     const result = await client.auth.loginWithCredential(
  //       new UserPasswordCredential(data.email, data.password)
  //     )
  //     console.log('result? ', result)
  //     setUser(result.profile)
  //   } catch (err) {
  //     console.error('error in onSubmit: ', err)
  //     setUser()
  //     client = undefined
  //   }
  // }

  // useEffect(() => {
  //   async function initializeAndLogin() {
  //     try {
  //       console.log('user? ', user)
  //       if (!client) {
  //         client = Stitch.initializeDefaultAppClient(
  //           process.env.STITCH_CLIENT
  //         )
  //       }
  //       const result = await client.auth.loginWithCredential(
  //         new UserPasswordCredential(email, password)
  //       )
  //       console.log('result? ', result)
  //       setUser(result.profile)
  //     } catch (err) {
  //       console.error('error in initializeAndLogin: ', err)
  //       setUser()
  //       client = undefined
  //     }
  //   }
  //
  //   if (!user) {
  //     initializeAndLogin()
  //   }
  // }, [user])
  return <p>Coming soon...</p>

  // if (!user) {
  //   return (
  //     <Form onSubmit={handleSubmit(onSubmit)} ref={formContainer}>
  //       <Label htmlFor="email" error={!!errors.email}>
  //         Email (username)
  //       </Label>
  //       <TextInput
  //         id="email"
  //         name="email"
  //         type="email"
  //         placeholder="demo@example.com"
  //         disabled={formState.isSubmitting}
  //         error={!!errors.email}
  //         ref={register({ required: 'Required' })}
  //       />
  //       <Label htmlFor="password" error={!!errors.password}>
  //         Password
  //       </Label>
  //       <TextInput
  //         id="password"
  //         name="password"
  //         type="password"
  //         disabled={formState.isSubmitting}
  //         error={!!errors.password}
  //         ref={register({ required: 'Required' })}
  //       />
  //       <Button disabled={formState.isSubmitting}>
  //         {formState.isSubmitting ? 'Pending...' : 'Log in'}
  //       </Button>
  //     </Form>
  //   )
  // }
  //
  // return (
  //   <>
  //     <h1>Hi, {user.name || user.identities[0].providerType}!</h1>
  //     <p>chat chat chat</p>
  //   </>
  // )
}

export default Chat
