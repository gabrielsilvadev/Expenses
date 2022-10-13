import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container , Chart, Cards} from './styles';
import { VictoryPie, VictoryTooltip } from 'victory-native'
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

export function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState([ { x: "Cats", y: 35, color: "blue" },
  { x: "Dogs", y: 40, color: "red"},
  { x: "Birds", y: 55 , color: "green"}])
  function handleNewOrder() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Chart>  
      <VictoryPie
      data={data}
      animate={
        {
          duration: 2000,
          easing: 'elasticOut'
        }
      }
      style={{
        labels:{
          fill: '#fff'
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
      innerRadius={85}
      />
      </Chart>
      <Cards>
      <Card text="Pix" icon='send'/>
      <Card text="Dinheiro" icon='cash'/>
      <Card text="Contas" icon='bills'/>
      </Cards>
    </Container>
  );
}
