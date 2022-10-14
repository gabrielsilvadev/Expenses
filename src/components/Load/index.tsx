import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

export function Load() {
  const theme = useTheme()

  return (
    <ActivityIndicator
      color={theme.COLORS.PRIMARY}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  )
}
