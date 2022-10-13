import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100px;
  height: 100px;
  justify-content: center;
  padding: 8px;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Title = styled.Text`
  flex: 1;
  margin-top: 4px
  font-size: 14px;
  color: #4B5563;
  font-weight: 400;
`;
