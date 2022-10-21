import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Switchs, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  isEnabled: boolean
  toggleSwitch
}

export function Switch({ isEnabled, toggleSwitch, title, ...rest }: Props) {
  return (
    <Container>
      <Switchs
        trackColor={{ false: '#767577', true: '#27AE60' }}
        ios_backgroundColor="#3e3e3e"
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        {...rest}
      />
      <Title>{title}</Title>
    </Container>
  )
}
