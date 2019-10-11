import React from 'react'
import styled from 'styled-components'

import { Avatar, Card, SocialIconLink, StyledWebLink } from 'components'

const Name = styled.div`
  font-size: 1.25em;
  line-height: 1.5;
  font-weight: normal;
  font-family: SourceCP, sans-serif;

  @media screen and (min-width: 740px) {
    font-size: 1.5em;
  }

  @media screen and (min-width: 1020px) {
    font-size: 1.8em;
  }
`

const Title = styled.div`
  font-size: 16px;
  line-height: 1.3;
  font-weight: bolder;
  font-family: SourceCP, sans-serif;

  @media screen and (min-width: 740px) {
    font-size: 18px;
    line-height: 1.4;
  }

  @media screen and (min-width: 1020px) {
    font-size: 20px;
    line-height: 1.6;
  }
`

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 42px auto;
  grid-template-rows: 42px auto;
  grid-gap: 0.66em;

  @media screen and (min-width: 350px) {
    font-size: 16px;
  }

  @media screen and (min-width: 740px) {
    grid-template-columns: 80px auto;
    grid-template-rows: 80px auto;
    grid-gap: 1.33em;
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: 120px auto;
    grid-template-rows: 120px auto;
    grid-gap: 2em;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Blurb = styled.p`
  font-size: 125%;
  opacity: 0.8;
  border-left: 2px solid #d5dce1;
  padding-left: 1em;
`

const Paragraph = styled.p`
  letter-spacing: 0.1px;
`

const SectionHeader = styled.h4`
  margin-top: 2.5em;
`

const ListOfLinks = styled.ul`
  list-style-type: circle;
`

const SocialLinkContainer = styled.div`
  /* Conainer name */
`

const Content = styled.div`
  /* Conainer name */
`

function About() {
  return (
    <Card>
      <ProfileGrid>
        <Avatar src="/images/avatar.png" alt="profile photo" />

        <InfoContainer>
          <Name>Allison Kunz</Name>
          <Title>Front end engineer</Title>
        </InfoContainer>

        <SocialLinkContainer>
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
        </SocialLinkContainer>

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
