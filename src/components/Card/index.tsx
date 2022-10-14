import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  text: keyof typeof String
}

const img = {
  send: require('../../img/Frame-12.png'),
  cash: require('../../img/Frame-11.png'),
  bills: require('../../img/Frame-13.png')
}

export function Card({ icon, text, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container {...rest}>
      <Image source={img[icon]} />
      <Title>{text}</Title>
    </Container>
  )
}
