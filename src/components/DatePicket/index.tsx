import React, {useState} from 'react';
import { TextInputProps, TouchableOpacity, Text} from 'react-native';
import RNDateTimePicker  from '@react-native-community/datetimepicker';

import moment from 'moment'
import { Container } from './styles';
import { Input } from '../Input';




export function PicketInput({ ...rest }: TextInputProps) {
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [dateInput, setDateInput] = useState('')
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(false)
        setDate(currentDate)
        setDateInput(moment(currentDate).format("DD/MM/YYYY").toString())
      }
    
   
    return (
      <Container >
        <TouchableOpacity onPress={()=> setShow(!show)}>
        <Input editable={false}  selectTextOnFocus={false} value={dateInput} placeholder="Selecione Data">
        </Input>
        </TouchableOpacity>
        { show ? (
        <RNDateTimePicker  value={new Date} onChange={onChange} is24Hour={true} /> )
       : <Text/>} 
      </Container>
    );
  }
