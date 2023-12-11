import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const HomeScreen = () => {

  const clearOnboarding = async() => {

    try {

      await AsyncStorage.removeItem('@viewedOnboarding')
      
      return true;

    } catch (error) {
      
      console.log('Error @remeoveItem :', error)

    }

  }

  return (

    <View>

      <Text>Home</Text>

      <TouchableOpacity onPress={clearOnboarding}>
      
        <Text>Clear Onboarding</Text>
        
      </TouchableOpacity>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})