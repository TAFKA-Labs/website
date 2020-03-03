import React from 'react'
import { Box, Heading, Text } from 'grommet'

function Home() {
  return (
    <Box flex="grow" justify="center" margin="medium">
      <Heading margin={{ top: '-0.33em' }}>Hello, world</Heading>
      <Text>It&apos;s nice to meet you</Text>
    </Box>
  )
}

export default Home
