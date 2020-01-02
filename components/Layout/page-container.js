import styled from 'styled-components'
import { responsiveSpacing } from '../style-segments'

const PageContainer = styled.div`
  ${responsiveSpacing}
  flex: 1;
  order: -1;

  @media screen and (min-width: 740px) {
    flex: 2;
  }

  @media screen and (min-width: 1020px) {
    flex: 2;
  }
`

export default PageContainer
