import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { Container, Header, Title, Form, RNPickerStyle, ErrorMessage } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { PicketInput } from "../../components/DatePicket";
import { Switch } from "../../components/Switch";
import moment from "moment";
import { defaultColors } from "./constants";
import { ICreateExpense } from "./@types";
import createExpense from "../../services/expense/createExpense";
import { formatDateToAPI } from "../../utils/date/format";
import createExpenseSchema from "./schema";
import validateSchema from "../../utils/yup/validateSchema";

export function NewExpenses() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined)
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [dateInput, setDateInput] = useState('')

  const [isPaid, setIsPaid] = useState(false)
  const [isMine, setIsMine] = useState(false)
  const [name, setName] = useState("")
  const [value, setValue] = useState("")
  const [color, setColor] = useState("")

  const navigation = useNavigation();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(false)
    setDate(currentDate)
    setDateInput(moment(currentDate).format("DD/MM/YY").toString())
  }

  function handleBack() {
    navigation.goBack()
  }

  function resetFields() {
    setIsPaid(false)
    setIsMine(false)
    setName("")
    setValue("")
    setColor("")
  }

  function validateExpense(expense: ICreateExpense) {
    const error = validateSchema(createExpenseSchema, expense)
    if (error)
      setError(error)
    else
      setError(undefined)

    return error
  }

  async function saveExpense() {
    const expense: ICreateExpense = {
      color,
      name,
      value,
      due_date: formatDateToAPI(new Date()),
      is_mine: isMine,
      paid: isPaid,
      profile_id: 1,
    }

    if (!validateExpense(expense))
      await createExpense(expense).finally(() => {
        resetFields()
      })
  }

  return (
    <Container>
      <Header>
        <Title>Nova Dispesa</Title>
      </Header>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form>
        <Input placeholder="Descrição" value={name} onChangeText={setName} />
        <Input placeholder="Valor" value={value} keyboardType="numeric" onChangeText={setValue} />
        <RNPickerSelect
          onValueChange={setColor}
          value={color}
          placeholder={{ label: 'Selecione a cor', value: null, color: '#383B43' }}
          items={defaultColors}
          style={RNPickerStyle}
        />

        <PicketInput show={show} date={date} setShow={setShow} setOnChange={onChange} dateInput={dateInput} />

        <Switch
          title="Essa conta ja foi paga?"
          isEnabled={isPaid}
          toggleSwitch={() => {
            setIsPaid(!isPaid)
          }}
        />

        <Switch
          title="Esta compra é sua"
          isEnabled={isMine}
          toggleSwitch={() => {
            setIsMine(!isMine)
          }}
        />

        {/* <Switch title="Conta Fixa" isEnabled={expanseFix} toggleSwitch={toggleSwitchExpanse} /> */}
        <Button title="Salvar" onPress={saveExpense} isLoading={isLoading} />

      </Form>
    </Container>
  )
}
