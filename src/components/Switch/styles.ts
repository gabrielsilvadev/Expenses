import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Switchs = styled.Switch`
  height: 56px;
`

export const Title = styled.Text`
  width: 80%;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`
