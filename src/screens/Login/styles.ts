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
  width: 100%;
  margin-top: 2%;
  align-self: center;
  height: 50%;
`

export const Text = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Footer = styled.View`
  width: 100%;
  min-height: 300px;
  height: auto;

  margin-top: 10px;
  padding: 15px;
  padding-top: 25px;

  flex: 1;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const FooterTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};

  margin-bottom: 20px;
`

export const TextInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;
`

export const ButtonContainer = styled.View`
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 20px;
  gap: 10px;
`

export const Button = styled(TouchableOpacity)`
  width: auto;
  min-width: 120px;
  height: 60px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  border-radius: 5px;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-transform: uppercase;
`

export const RegisterButton = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const RegisterButtonText = styled(ButtonText)`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-decoration: solid;
`
