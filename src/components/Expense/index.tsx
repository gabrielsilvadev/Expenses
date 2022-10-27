import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { TExpense } from '../../services/expense/@types/expense'
import {
  Container,
  Content,
  Footer,
  Header,
  Info,
  Label,
  LabelMany,
  Status,
  Title
} from './styles'

type Props = PressableProps & {
  data: TExpense
}

export function Expense({ data, ...rest }: Props) {
  const theme = useTheme()
  return (
    <Container {...rest} onPress={() => {}}>
      <Status paid={data.paid} />
      <Content>
        <Header>
          <Title>{data.name}</Title>
          <MaterialIcons
            name={!data.paid ? 'hourglass-empty' : 'check-circle'}
            size={24}
            color={!data.paid ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY}
          />
        </Header>
        <Footer>
          <Info>
            <MaterialIcons
              name="schedule"
              size={16}
              color={theme.COLORS.SUBTEXT}
            />
            <Label>{data.due_date}</Label>
          </Info>

          <Info>
            <LabelMany>R$ {data.value}</LabelMany>
          </Info>
        </Footer>
      </Content>
    </Container>
  )
}
