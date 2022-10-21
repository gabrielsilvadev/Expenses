import RNDateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Text, TextInputProps, TouchableOpacity } from 'react-native'

import { Input } from '../Input'
import { Container } from './styles'

interface IPicketInput {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  setOnChange: (event: any, selectedDate: any) => void
  dateInput: string
}

export function PicketInput({
  show,
  setShow,
  setOnChange,
  dateInput
}: IPicketInput) {
  return (
    <Container>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Input
          editable={false}
          returnKeyType="done"
          selectTextOnFocus={false}
          value={dateInput}
          placeholder="Selecione Data"
        ></Input>
      </TouchableOpacity>
      {show ? (
        <RNDateTimePicker
          value={new Date()}
          onChange={setOnChange}
          is24Hour={true}
        />
      ) : (
        <Text />
      )}
    </Container>
  )
}
