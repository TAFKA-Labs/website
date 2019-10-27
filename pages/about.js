import React from 'react'
import {
  Avatar,
  Blurb,
  Content,
  InfoContainer,
  ListOfLinks,
  Name,
  Paragraph,
  ProfileGrid,
  SectionHeader,
  SocialIconLink,
  StyledWebLink,
  Title,
} from 'components/About'
import { Card } from 'components'

function About() {
  return (
    <Card>
      <ProfileGrid>
        <Avatar src="/images/avatar.png" alt="profile photo" />

        <InfoContainer>
          <Name>Allison Kunz</Name>
          <Title>Front end engineer</Title>
        </InfoContainer>

        <Content>
          <SocialIconLink
            href="https://github.com/allpwrfulroot"
            src="/svg/github.svg"
            alt="link to github"
          />
          <SocialIconLink
            href="https://www.linkedin.com/in/tafka-labs/"
            src="/svg/linkedin.svg"
            alt="link to linkedin"
          />
          <SocialIconLink
            href="https://twitter.com/TafkaLabs"
            src="/svg/twitter.svg"
            alt="link to twitter"
          />
        </Content>

        <Content>
          <Paragraph>
            Full stack web and mobile developer specializing in React, React
            Native, & GraphQL. Consultant and contractor, both independently and
            with agencies.
          </Paragraph>

          <Blurb>
            I bring experience with enterprise-level digital transformations —
            web and mobile, multi-platform — unifying all digital assets into a
            streamlined workflow
          </Blurb>

          <Paragraph>
            I enjoy working with all stakeholders, from business to design to
            engineering, to streamline high-quality software development. For
            example, establishing component libraries that can support
            beautiful, responsive, and cohesive enterprise-grade design systems.
          </Paragraph>

          <Paragraph>
            I am constantly exploring the latest and greatest in web
            development, finding the best new tools in the React ecosystem and
            sharing them with my clients (or advising that they wait).
          </Paragraph>

          <Blurb>
            My focus is on scalable and effective developer experience (DX) to
            set up teams for success
          </Blurb>

          <Paragraph>
            My work involves both planning and code. I have provided technical
            advising for non-technical startup teams and agencies. I have built
            initial products (MVP architecture, proof-of-concept) and
            contributed to existing codebases at crunch time.
          </Paragraph>

          <Paragraph>
            I am available for short- to medium-term engagements, but no
            permanent roles please.
          </Paragraph>

          <SectionHeader>Preferred frameworks</SectionHeader>
          <ListOfLinks>
            <StyledWebLink
              href="https://nextjs.org"
              text="NextJS enterprise-grade web development"
            />
            <StyledWebLink
              href="https://expo.io"
              text="Expo React Native ecosystem"
            />
            <StyledWebLink
              href="https://hasura.io"
              text="Hasura GraphQL Engine"
            />
          </ListOfLinks>

          <SectionHeader>What I subscribe to</SectionHeader>
          <ListOfLinks>
            <StyledWebLink
              href="https://reactjsnewsletter.com"
              text="React Newsletter"
            />
            <StyledWebLink
              href="https://reactnative.cc"
              text="React Native Newsletter"
            />
            <StyledWebLink
              href="https://www.graphqlweekly.com"
              text="GraphQL Weekly"
            />
            <StyledWebLink
              href="https://kentcdodds.com/subscribe/"
              text="Kent C. Dodds Blog"
            />
            <StyledWebLink
              href="https://overreacted.io"
              text="Overreacted by Dan Abramov"
            />
            <StyledWebLink href="https://blog.hasura.io" text="Hasura Blog" />
          </ListOfLinks>

          <SectionHeader>Favorite Pokémon</SectionHeader>
          <Paragraph>Typhlosion</Paragraph>
        </Content>
      </ProfileGrid>
    </Card>
  )
}

export default About
