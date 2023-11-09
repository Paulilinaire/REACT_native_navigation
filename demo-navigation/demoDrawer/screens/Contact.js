import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Contact() {

    const navigation = useNavigation()

  return (
    <View>
      <Text>Contact</Text>
      <Button
      title='Open Drawer'
      onPress={() => navigation.openDrawer()}
      />
      <Button
      title='HomePage'
      onPress={() => navigation.navigate("Home")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})