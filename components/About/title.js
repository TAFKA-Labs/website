import styled from 'styled-components'

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

export default Title
