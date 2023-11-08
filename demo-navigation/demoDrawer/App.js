import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import About from './screens/About'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='About' component={About} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})