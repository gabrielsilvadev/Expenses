import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { useTheme } from 'styled-components/native'

import { Filter } from '../Filter'
import { Container, Options, Title } from './styles'

type Props = {
  onFilter: (status: string) => void
  status: string
}

export function Filters({ onFilter, status }: Props) {
  const theme = useTheme()

  return (
    <Container>
      <Options>
        <Filter
          title="Pendentes"
          backgroundColor={theme.COLORS.SECONDARY}
          onPress={() => onFilter('pending')}
        />

        <Filter
          title="Pagos"
          backgroundColor={theme.COLORS.PRIMARY}
          onPress={() => onFilter('payment')}
        />
        <RNPickerSelect
          onValueChange={() => {}}
          placeholder={{ label: 'Mes', value: 'JAN' }}
          items={[
            { label: 'JAN', color: '#383B43', value: 'jan' },
            { label: 'FEV', color: '#383B43', value: 'fev' },
            { label: 'MAR', color: '#383B43', value: 'mar' },
            { label: 'ABR', color: '#383B43', value: 'abr' },
            { label: 'MAI', color: '#383B43', value: 'mai' },
            { label: 'JUN', color: '#383B43', value: 'jun' },
            { label: 'JUL', color: '#383B43', value: 'jul' },
            { label: 'AGO', color: '#383B43', value: 'ago' },
            { label: 'SET', color: '#383B43', value: 'set' },
            { label: 'OUT', color: '#383B43', value: 'out' },
            { label: 'NOV', color: '#383B43', value: 'nov' },
            { label: 'DEZ', color: '#383B43', value: 'dez' }
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
