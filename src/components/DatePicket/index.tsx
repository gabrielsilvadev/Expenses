import React, {useState} from 'react';
import { TextInputProps, TouchableOpacity, Text} from 'react-native';
import RNDateTimePicker  from '@react-native-community/datetimepicker';

import moment from 'moment'
import { Container } from './styles';
import { Input } from '../Input';




export function PicketInput({show, date,setShow,setOnChange,dateInput, ...rest }: TextInputProps) {
  
    return (
      <Container >
        <TouchableOpacity onPress={()=> setShow(!show)}>
        <Input editable={false}  selectTextOnFocus={false} value={dateInput} placeholder="Selecione Data">
        </Input>
        </TouchableOpacity>
        { show ? (
        <RNDateTimePicker  value={new Date} onChange={setOnChange} is24Hour={true} {...rest} /> )
       : <Text/>} 
      </Container>
    );
  }
