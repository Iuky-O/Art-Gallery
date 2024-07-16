import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text onPress={() => navigation.navigate('Art')}>Ir para exp da arte</Text>
    </View>
  )
}