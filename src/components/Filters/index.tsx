import moment from 'moment'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { useTheme } from 'styled-components/native'

import { Filter } from '../Filter'
import { months } from './constants'
import { Container, Options, Title } from './styles'

type stateHandler = (status: string) => string

type Props = {
  onFilter: (status: string | stateHandler) => void
  status: string
}

export function Filters({ onFilter, status }: Props) {
  const theme = useTheme()

  function handlePaidFilters(filters: string, paid: boolean) {
    const filterToRemove = `&paid__eq=${paid ? 0 : 1}`
    const filterToAdd = `&paid__eq=${paid ? 1 : 0}`

    if (filters.includes(filterToRemove)) {
      return filters.replace(filterToRemove, filterToAdd)
    } else {
      return filters + filterToAdd
    }
  }

  function handleMonthFilter(value) {
    if (value === 'all') {
      onFilter('?')
      return
    }

    const startDate = moment(value).startOf('month').format('YYYY-MM-DD')
    const endDate = moment(value).endOf('month').format('YYYY-MM-DD')
    onFilter(`?due_date__gte=${startDate}&due_date__lte=${endDate}`)
  }

  return (
    <Container>
      <Options>
        <RNPickerSelect
          onValueChange={handleMonthFilter}
          placeholder={{ label: 'Todas', value: 'all' }}
          items={months}
          style={{
            placeholder: {
              color: '#383B43',
              textAlign: 'center',
              left: 10
            },
            viewContainer: {
              backgroundColor: '#fff',
              elevation: 4,
              height: 70,
              width: '100%',
              marginBottom: 10,
              borderRadius: 10
            }
          }}
        />
      </Options>
      <Options>
        <Filter
          title="Pendentes"
          backgroundColor={theme.COLORS.SECONDARY}
          onPress={() =>
            onFilter((prevState: string) => handlePaidFilters(prevState, false))
          }
        />

        <Filter
          title="Pagos"
          backgroundColor={theme.COLORS.PRIMARY}
          onPress={() =>
            onFilter((prevState: string) => handlePaidFilters(prevState, true))
          }
        />
      </Options>
    </Container>
  )
}
