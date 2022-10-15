import { Feather } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap
}

export function IconButton({ icon, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container {...rest}>
      <Feather name={icon} size={20}  />
    </Container>
  )
}
