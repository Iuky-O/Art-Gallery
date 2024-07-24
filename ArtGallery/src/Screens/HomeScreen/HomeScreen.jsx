import { View, Text, ScrollView, SafeAreaView, StatusBar, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../utils/Colors'
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
  const [text, onChangeText] = React.useState('');

  return (
    /**<ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
            { long content here }
      </SafeAreaView>
      </ScrollView> */
  
      
      <ScrollView style={{backgroundColor: '#e6bb8d'}}>
        <StatusBar
          animated={true}
          backgroundColor = '#e6bb8d'
        />
        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder='Search' onChangeText={onChangeText} value={text} />
          <AntDesign name="search1" size={30} color="black" />
        </View>
        <View>
          <Text>HomeScreen</Text>
          <Text onPress={() => navigation.navigate('Art')}>Ir para exp da arte</Text>
        </View>
      </ScrollView>
    
    
  )
}

const styles = StyleSheet.create({
  input:{
    alignItems: 'center',
  },
  textInput:{
    height: 40,
    width: '70%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginTop: 50, 
  }

})
