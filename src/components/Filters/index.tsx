import moment from 'moment'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { useTheme } from 'styled-components/native'

import { Filter } from '../Filter'
import { Container, Options, Title } from './styles'

type stateHandler = (status: string) => string

type Props = {
  onFilter: (status: string | stateHandler) => void
  status: string
}

export function Filters({ onFilter, status }: Props) {
  const theme = useTheme()

  function generateMonthDate(month) {
    const toDay = new Date()
    return `${toDay.getFullYear()}-${month}-01`
  }
  return (
    <Container>
      <Options>
        <Filter
          title="Pendentes"
          backgroundColor={theme.COLORS.SECONDARY}
          onPress={() =>
            onFilter((prevState: string) => `${prevState}&paid__eq=0`)
          }
        />

        <Filter
          title="Pagos"
          backgroundColor={theme.COLORS.PRIMARY}
          onPress={() =>
            onFilter((prevState: string) => `${prevState}&paid__eq=1`)
          }
        />
        <RNPickerSelect
          onValueChange={(value) => {
            if (value === 'all') {
              onFilter('?')
              return
            }

            const startDate = moment(value)
              .startOf('month')
              .format('YYYY-MM-DD')
            const endDate = moment(value).endOf('month').format('YYYY-MM-DD')
            onFilter(`?due_date__gte=${startDate}&due_date__lte=${endDate}`)
          }}
          placeholder={{ label: 'Mes', value: 'JAN' }}
          items={[
            { label: 'Todas', color: '#383B43', value: 'all' },
            { label: 'JAN', color: '#383B43', value: generateMonthDate('01') },
            { label: 'FEV', color: '#383B43', value: generateMonthDate('02') },
            { label: 'MAR', color: '#383B43', value: generateMonthDate('03') },
            { label: 'ABR', color: '#383B43', value: generateMonthDate('04') },
            { label: 'MAI', color: '#383B43', value: generateMonthDate('05') },
            { label: 'JUN', color: '#383B43', value: generateMonthDate('06') },
            { label: 'JUL', color: '#383B43', value: generateMonthDate('07') },
            { label: 'AGO', color: '#383B43', value: generateMonthDate('08') },
            { label: 'SET', color: '#383B43', value: generateMonthDate('09') },
            { label: 'OUT', color: '#383B43', value: generateMonthDate('10') },
            { label: 'NOV', color: '#383B43', value: generateMonthDate('11') },
            { label: 'DEZ', color: '#383B43', value: generateMonthDate('12') }
          ]}
          style={{
            placeholder: {
              color: '#383B43',
              textAlign: 'center',
              left: 10,
              marginVertical: -5
            },
            viewContainer: {
              backgroundColor: '#fff',
              elevation: 4,
              height: 40,
              width: '30%'
            }
          }}
        />
      </Options>
    </Container>
  )
}
