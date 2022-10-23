import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Load, Title } from './styles'

type Props = TouchableOpacityProps & {
  data: string
  isLoading?: boolean
}

export function Modal({ data, ...rest }: Props) {
  return <Container {...rest}>{data}</Container>
}
