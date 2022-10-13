import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px ;
`;

export const Chart = styled.View`
width: 100%;
height: 70%;
align-items: center;
`

export const Cards = styled.View`
flex: 1;
justify-content: space-between;
flex-direction: row;
backgroud-color: #fff
`
