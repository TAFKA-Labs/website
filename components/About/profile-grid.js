import styled from 'styled-components'

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

export default ProfileGrid
