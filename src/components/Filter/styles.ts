import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type FilterProps = {
  backgroundColor: string
}

export const Container = styled(TouchableOpacity)<FilterProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  padding: 10px;
  height: 50px;
`

export const Title = styled.Text`
  font-size: 15px;
  margin-top: 2%;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
