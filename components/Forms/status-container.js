import styled from 'styled-components'

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ height }) => `height: ${height}px; width: 100%;`}
`

export default StatusContainer
