import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Go to About Screen' onPress={() => navigation.navigate('About')}/>
    </View>
  )
}