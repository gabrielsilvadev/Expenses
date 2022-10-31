import styled from 'styled-components/native'
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
  width: 100%;
  height: 100%;
`

export const Image = styled.Image`
  align-self: center;
  width: 30%;
  height: 100%;
`
export const CardUser = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-bottom-width: 1px;
  padding: 5px;
  height: 25%;
`
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`
export const Card = styled.View`
  padding: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  height: 60%;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
`

export const Form = styled.View`
  flex: 1;
`
