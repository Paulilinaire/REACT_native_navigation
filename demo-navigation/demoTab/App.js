import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Contact from './screens/Contact'
import About from './screens/About'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarIconStyle: {display: 'none'}, tabBarLabelPosition: 'beside-icon'}}>           
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Contact' component={Contact} />
            <Tab.Screen name='About' component={About} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})