import React, { useContext } from 'react'
import styled from 'styled-components'
import {
  Anchor,
  Box,
  Grid,
  Heading,
  Image,
  Paragraph,
  Text,
  ResponsiveContext,
} from 'grommet'
import { Github, Linkedin, Twitter } from 'grommet-icons'

const StyledLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;

  &:hover {
    background-color: ${({ theme }) => theme.global.colors.brand}20;
  }
`
const FRAMEWORKS_LIST = [
  {
    id: 0,
    href: 'https://nextjs.org',
    label: 'NextJS enterprise-grade web development',
  },
  { id: 1, href: 'https://hasura.io', label: 'Hasura GraphQL Engine' },
  { id: 2, href: 'https://expo.io', label: 'Expo React Native ecosystem' },
]

const RESOURCES_LIST = [
  { id: 0, href: 'https://reactjsnewsletter.com', label: 'React Newsletter' },
  { id: 1, href: 'https://reactnative.cc', label: 'React Native Newsletter' },
  { id: 2, href: 'https://www.graphqlweekly.com', label: 'GraphQL Weekly' },
  { id: 3, href: 'https://blog.hasura.io', label: 'Hasura Blog' },
  {
    id: 4,
    href: 'https://kentcdodds.com/subscribe/',
    label: 'Kent C. Dodds Blog',
  },
  {
    id: 5,
    href: 'https://overreacted.io',
    label: 'Overreacted by Dan Abramov',
  },
]

const SIZES_LIST = {
  small: {
    columns: 'xxsmall',
    gap: 'small',
    icon: 'medium',
  },
  medium: {
    columns: 'xsmall',
    gap: 'medium',
    icon: 'large',
  },
  large: {
    columns: 'xsmall',
    gap: 'medium',
    icon: 'large',
  },
}

function About() {
  const size = useContext(ResponsiveContext)
  return (
    <Grid
      rows={['auto', 'auto']}
      columns={[SIZES_LIST[size].columns, 'flex']}
      areas={[
        ['image', 'header'],
        ['links', 'content'],
      ]}
      gap={SIZES_LIST[size].gap}
      pad={SIZES_LIST[size].gap}
    >
      <Box
        width={SIZES_LIST[size].columns}
        height={SIZES_LIST[size].columns}
        justify="end"
        gridArea="image"
      >
        <Image src="/images/avatar.png" alt="profile photo" fit="contain" />
      </Box>

      <Box justify="end" gridArea="header">
        <Heading level={3} margin={{ vertical: 'small' }}>
          Allison Kunz
        </Heading>
        <Text as="h4" margin={{ vertical: 'xsmall' }} responsive>
          Web & mobile application architect
        </Text>
      </Box>

      <Grid
        columns={SIZES_LIST[size].columns}
        rows={SIZES_LIST[size].columns}
        gap="small"
        gridArea="links"
      >
        <StyledLink
          href="https://github.com/allpwrfulroot"
          alt="link to github"
        >
          <Github color="brand" size={SIZES_LIST[size].icon} />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/tafka-labs/"
          alt="link to linkedin"
        >
          <Linkedin color="brand" size={SIZES_LIST[size].icon} />
        </StyledLink>
        <StyledLink href="https://twitter.com/TafkaLabs" alt="link to twitter">
          <Twitter color="brand" size={SIZES_LIST[size].icon} />
        </StyledLink>
      </Grid>

      <Box gridArea="content">
        <Paragraph>
          Full stack web and mobile developer specializing in React, React
          Native, & GraphQL. Consultant and contractor, both independently and
          with agencies.
        </Paragraph>

        <Heading level={4}>My work</Heading>

        <Paragraph>
          I work with all stakeholders to plan, build, and ship digital
          applications with both high impact for consumers and high engineering
          efficiency.
        </Paragraph>

        <Paragraph>
          I bring experience ranging from tiny startup to giant multinational. I
          have provided technical advising for non-technical startup teams and
          agencies, built initial products (MVP architecture, proof-of-concept),
          and contributed to existing codebases at crunch time. I also love
          sharing these experiences: please see my{' '}
          <Anchor
            href="https://www.youtube.com/watch?v=ss1v-K1QqFo"
            target="_blank"
            label="recent conference talk"
          />{' '}
          and full-day Intro to NextJS with GraphQL{' '}
          <Anchor
            href="https://www.eventbrite.com/e/intro-to-nextjs-with-graphql-tickets-81646842905"
            target="_blank"
            primary
            label="workshop agenda"
          />
          .
        </Paragraph>

        <Heading level={4}>My mission</Heading>

        <Paragraph>
          Developer experience should be amazing even as digital businesses grow
          and mature. With the right tools, processes, and growth opportunities
          your engineering teams can be as delighted as your customers.
        </Paragraph>

        <Heading level={4}>Preferred frameworks</Heading>
        <ul>
          {FRAMEWORKS_LIST.map(x => (
            <li key={x.id}>
              <Anchor {...x} />
            </li>
          ))}
        </ul>

        <Heading level={4}>Recommended resources</Heading>
        <ul>
          {RESOURCES_LIST.map(x => (
            <li key={x.id}>
              <Anchor {...x} />
            </li>
          ))}
        </ul>
      </Box>
    </Grid>
  )
}

export default About
