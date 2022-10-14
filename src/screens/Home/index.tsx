import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container , Chart, Cards, Title, View} from './styles';
import { VictoryPie, VictoryTooltip } from 'victory-native'
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState([ { x: "Cats", y: 35, color: "blue" },
  { x: "Dogs", y: 10, color: "red"},
  { x: "Birds", y: 40 , color: "green"}])
  function toGoExpenses() {
    navigation.navigate("ShowExpenses");
  }

  return (
    <Container>
      <Header />
      <Chart>
      <Title>$4000</Title>
      <VictoryPie
      height={350}
      cornerRadius={16}
      data={data}
      animate={
        {
          duration: 2000,
          easing: 'elasticOut'
        }
      }
      style={{
        labels:{
          fill: '#fff',
        }
      }}
      colorScale={data.map(c => c.color)}
      labelComponent={
       <VictoryTooltip
       renderInPortal={false}
       flyoutStyle={
        {
          stroke: 0,
          fill: ({datum})=> datum.color
        }
       }
       />
      }
      innerRadius={80}
      />
      </Chart>
      <Cards>
      <Card text="Pix" icon='send' />
      <Card text="Dinheiro" icon='cash'/>
      <Card text="Contas" icon='bills' onPress={()=>toGoExpenses()}/>
      </Cards>
    </Container>
  );
}
