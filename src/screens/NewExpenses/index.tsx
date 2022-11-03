import moment from 'moment'
import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select'

import { Button } from '../../components/Button'
import { PicketInput } from '../../components/DatePicket'
import { Input } from '../../components/Input'
import { Switch } from '../../components/Switch'
import createExpense from '../../services/expense/createExpense'
import validateSchema from '../../utils/yup/validateSchema'
import { ICreateExpense } from './@types'
import { defaultColors } from './constants'
import createExpenseSchema from './schema'
import {
  Container,
  ErrorMessage,
  Form,
  Header,
  SuccessMessage,
  Title
} from './styles'

export function NewExpenses() {
  const [error, setError] = useState(undefined)
  const [success, setSuccess] = useState(undefined)
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [dateInput, setDateInput] = useState('')

  const [isPaid, setIsPaid] = useState(false)
  const [isMine, setIsMine] = useState(false)
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [color, setColor] = useState('')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(false)
    setDate(currentDate)
    setDateInput(moment(currentDate).format('DD/MM/YYYY').toString())
  }

  function resetFields() {
    setIsPaid(false)
    setIsMine(false)
    setName('')
    setValue('')
    setDateInput('')
    setColor('')
  }

  function validateExpense(expense: ICreateExpense) {
    const error = validateSchema(createExpenseSchema, expense)
    if (error) setError(error)
    else setError(undefined)

    return error
  }

  async function saveExpense() {
    const expense: ICreateExpense = {
      color,
      name,
      value,
      due_date: dateInput,
      is_mine: isMine,
      paid: isPaid
    }

    if (!validateExpense(expense)) {
      const { data } = await createExpense(expense).finally(() => {
        resetFields()
      })
      setSuccess(data.success)
    }
  }

  return (
    <Container>
      <Header>
        <Title>Nova Dispesa</Title>
      </Header>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Dispesa salva com sucesso</SuccessMessage>}
      <Form>
        <Input placeholder="Descrição" value={name} onChangeText={setName} />
        <Input
          placeholder="Valor"
          value={value}
          keyboardType="numeric"
          onChangeText={setValue}
        />
        <RNPickerSelect
          onValueChange={setColor}
          value={color}
          placeholder={{
            label: 'Selecione a cor',
            value: null,
            color: '#383B43'
          }}
          items={defaultColors}
          style={{
            viewContainer: {
              borderWidth: 1,
              paddingLeft: 16,
              minHeight: 42,
              justifyContent: 'center',
              borderColor: '#C5CADA',
              backgroundColor: '#fff',
              borderRadius: 10
            }
          }}
        />

        <PicketInput
          show={show}
          setShow={setShow}
          setOnChange={onChange}
          dateInput={dateInput}
        />

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
        <Button title="Salvar" onPress={saveExpense} />
      </Form>
    </Container>
  )
}
