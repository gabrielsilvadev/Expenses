import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ListExpenses} from '../../components/ListExpenses'
import {View, TouchableOpacity} from 'react-native'
export function ShowExpenses() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [equipment, setEquipment] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View>
     <ListExpenses />
    </View>
  );
}
