import styled from 'styled-components/native'
import { TouchableOpacity} from 'react-native'
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`

export const Button = styled(TouchableOpacity)`
  width: 48px;
  height: 48px;
  justify-content: center;
  padding-right: 3px;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
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
