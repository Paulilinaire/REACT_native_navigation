import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './components/MyDrawer'
import MyStack from './components/MyStack'




export default function App() {
  return (
    <NavigationContainer>
        <MyStack></MyStack>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})