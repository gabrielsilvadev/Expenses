import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, FilterProps, Title } from './styles'

type Props = FilterProps &
  TouchableOpacityProps & {
    title: string
  }

export function Filter({ title, backgroundColor, ...rest }: Props) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
