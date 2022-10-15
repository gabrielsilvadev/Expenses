import {TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ExpenseStyleProps = {
  status: 'payment' | 'pending'
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 94px;
  elevation: 1px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`

export const Content = styled.View`
  flex: 1;
  height: 94px;
  padding: 0 15px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
`

export const Header = styled.View`
  flex-direction: row;
`

export const Status = styled.View<ExpenseStyleProps>`
  width: 10px;
  height: 94px;
  background-color: ${({ theme, status }) =>
    status === 'pending' ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
`

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
  font-weight: 500;
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`
export const LabelMany = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-left: 3px;
`

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  margin-left: 3px;
`
