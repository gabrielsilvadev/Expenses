import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #F4FFF7;
  padding: 24px;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Switch = styled.Switch`
width: 100%;
`
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
`

export const Form = styled.View`
  flex: 1;
`
