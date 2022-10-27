import styled from 'styled-components/native'

const BaseMessage = styled.Text`
  width: 100%;
  height: auto;

  padding: 16px;
  margin-bottom: 20px;

  border-radius: 5px;

  font-size: 12px;
`

export const ErrorMessage = styled(BaseMessage)`
  border: 1px solid #98242c70;
  background-color: #f8d7da;
  color: #78242c;
`

export const SuccessMessage = styled(BaseMessage)`
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  background-color: #d4edda;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`
