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

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`
export const FooterCard = styled.View`
width: 100%;
padding: 10px;
justify-content: space-between;
flex-direction: row;
`
export const Footer = styled.View`
  width: 100%;
  padding: 17px;
  justify-content: space-between;
  flex-direction: column;
`
export const LabelMany = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`
export const ScrollView = styled.ScrollView`
width: 100%;
height: 100%;
`

export const Label = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`

export const Chart = styled.View`
width: 100%;
margin-top: 10%;
padding-left: 23px;
border-radius: 12px;
background-color: ${({ theme }) => theme.COLORS.WHITE};
align-items: center;
`

export const CardWallet = styled.View`
width: 100%;
border-radius: 12px;
background-color: ${({ theme }) => theme.COLORS.WHITE};
align-items: center;
`
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const Form = styled.View`
  flex: 1;
`
