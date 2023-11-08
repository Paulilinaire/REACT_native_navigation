import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './component/HomePage'
import ProfilePage from './component/ProfilePage'


// package necessaire pour la navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/native-stack

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage'>
            <Stack.Screen name='HomePage' component={HomePage} options={{title : "Liste de contacts"}}/>
            <Stack.Screen name='ProfilePage' component={ProfilePage} options={{title : "Profil"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})