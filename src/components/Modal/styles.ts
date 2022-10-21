import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  margin-top: 3%
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE
}))``
