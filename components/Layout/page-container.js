import styled from 'styled-components'
import { responsiveSpacing } from '../style-segments'

const PageContainer = styled.div`
  ${responsiveSpacing}
  flex: 2;
  order: -1;
  background-image: url('/svg/background.svg');

  @media screen and (min-width: 740px) {
    flex: 3;
  }

  @media screen and (min-width: 1020px) {
    flex: 4;
  }
`

export default PageContainer
