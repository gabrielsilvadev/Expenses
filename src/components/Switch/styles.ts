import styled from 'styled-components/native';

export const Container = styled.View`
  width: 20%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 56px;
`;

export const Switchs = styled.Switch`
height: 56px;
`
export const Title = styled.Text`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;
