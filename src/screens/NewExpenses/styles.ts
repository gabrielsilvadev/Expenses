import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`

export const Switch = styled.Switch`
  width: 100%;
`
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
`

export const Form = styled.View`
  flex: 1;
`

export const RNPickerStyle = {
  viewContainer: {
    borderWidth: 1,
    paddingLeft: 16,
    minHeight: 42,
    justifyContent: 'center',
    borderColor: '#C5CADA',
    backgroundColor: '#fff',
    borderRadius: 10
  }
}
const BaseMessage = styled.Text`
  width: 100%;
  height: auto;

  padding: 16px;
  margin-bottom: 16px;

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
