import RNDateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import React, { useState } from 'react'
import { Text, TextInputProps, TouchableOpacity } from 'react-native'

import { Input } from '../Input'
import { Container } from './styles'

export function PicketInput({show, date,setShow,setOnChange,dateInput, ...rest }: TextInputProps) {

  return (
    <Container>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Input
          editable={false}
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
