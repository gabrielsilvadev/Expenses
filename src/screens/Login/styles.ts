import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Input } from '../../components/Input'
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #daf2e1;
  padding: 24px;
`

export const ContainerSlide = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`
export const Image = styled.Image`
  width: 70%;
  margin-top: 2%;
  align-self: center;
  height: 44%;
`
export const InputLogin = styled(Input)`
  width: 90%;
  margin-top: 2%;
  height: 17%;
`
export const Text = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const Button = styled(TouchableOpacity)`
  width: 48%;
  height: 15%;
  justify-content: center;
  padding-right: 3px;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`
export const ButtonCadastro = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`
export const TitleCadastro = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const SubTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Footer = styled.View`
  width: 100%;
  height: 50%;
  padding: 17px;
  margin-top: 5%;
  border-radius: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: space-between;
  flex-direction: column;
`
export const Label = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Form = styled.View`
  flex: 1;
`
