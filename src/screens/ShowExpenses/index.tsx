import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
export function ShowExpenses() {
  const [isLoading, setIsLoading] = useState(false)
  const [patrimony, setPatrimony] = useState('')
  const [equipment, setEquipment] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  return <View></View>
}
