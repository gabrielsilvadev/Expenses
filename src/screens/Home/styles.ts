import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
`

export const Chart = styled.View`
  width: 100%;
  height: 55%;
  margin-top: 3%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
`

export const View = styled.View`
  width: 20%;
  height: 5%;
  align-items: center;
`

export const Title = styled.Text`
  flex: 1;
  margin-top: 48%
  font-size: 30px;
  text-align: center;
  position: absolute;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  font-weight: 600;
`

export const Cards = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 7%;
  backgroud-color: #fff;
`
