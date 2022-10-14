import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  margin-top: 3px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: bold;
`

export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`
