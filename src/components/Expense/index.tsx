import { MaterialIcons } from '@expo/vector-icons'
import moment from 'moment'
import React from 'react'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import {
  Container,
  Content,
  Footer,
  Header,
  Info,
  Label,
  LabelMany,
  ExpenseStyleProps,
  Status,
  Title
} from './styles'
export type ExpenseProps = ExpenseStyleProps & {
  _id: string
  name: string
  valor: string
  fix: string
  created_at: Date
}

type Props = PressableProps & {
  data: ExpenseProps
}

export function Expense({ data, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container {...rest} onPress={()=>{}}>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title>{data.name}</Title>
          <MaterialIcons
            name={data.status === 'pending' ? 'hourglass-empty' : 'check-circle'}
            size={24}
            color={
              data.status === 'pending'
                ? theme.COLORS.SECONDARY
                : theme.COLORS.PRIMARY
            }
          />
        </Header>
        <Footer>
          <Info>
            <MaterialIcons
              name="schedule"
              size={16}
              color={theme.COLORS.SUBTEXT}
            />
            <Label>{moment(data.created_at).format('DD/MM - HH:MM')}</Label>
          </Info>

          <Info>
            <LabelMany>R$ {data.valor}</LabelMany>
          </Info>
        </Footer>
      </Content>
    </Container>
  )
}
