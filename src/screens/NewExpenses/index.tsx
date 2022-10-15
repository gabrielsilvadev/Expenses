import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { Container, Header, Title, Form, ViewSwitch} from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { PicketInput } from "../../components/DatePicket";
import { Switch } from "../../components/Switch";
import moment from "moment";
//import { getRealm } from "../../database/realm";

export function NewExpenses() {
  const [isLoading, setIsLoading] = useState(false);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [color, setColor] = useState("")
  const [isMine, setIsMine] = useState(false)
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [dateInput, setDateInput] = useState('')

  const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date
      setShow(false)
      setDate(currentDate)
      setDateInput(moment(currentDate).format("DD/MM/YYYY").toString())
    }
  
  const [status, setStatus] = useState(false);
  const [expanseFix, setExpanseFix] = useState(false);
  const toggleSwitchStatus = () => setStatus(previousState => !previousState);
  const toggleSwitchExpanse = () => setExpanseFix(previousState => !previousState);
  
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <Title>Nova Dispesa</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" onChangeText={setLabel} />
        <Input placeholder="Valor" keyboardType="numeric" onChangeText={setValue} />
        <RNPickerSelect
            onValueChange={(value) => setColor(value)}
            placeholder={{label: 'Selecione a cor', value: null, color: '#383B43'}}
            items={[
                { label: 'Verde',color:"#383B43", value: '#267365' },
                { label: 'Amarela',color:"#383B43", value: '#F2CB05' },
                { label: 'Laranja',color:"#383B43", value: '#F29F05' },
                { label: 'Vermelho',color:"#383B43", value: '#F23030' },
            ]}
            style={{viewContainer: {borderWidth:1,paddingLeft: 10,borderColor: '#C5CADA',backgroundColor: '#fff',borderRadius: 10}}} 
        />
        
        <PicketInput  show={show} date={date} setShow={setShow} setOnChange={onChange} dateInput={dateInput} />
        <Switch  title="Status"  isEnabled={status} toggleSwitch={toggleSwitchStatus}/>
        <Switch  title="Esta compra é sua"  isEnabled={isMine} toggleSwitch={setIsMine}/>
        <Switch  title="Conta Fixa"  isEnabled={expanseFix} toggleSwitch={toggleSwitchExpanse}/>

      <Button title="Salvar" isLoading={isLoading}  />
      </Form>
    </Container>
  )
}
