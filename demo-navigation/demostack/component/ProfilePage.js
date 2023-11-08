import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfilePage({navigation, route}) {
  const text = route.params.text

  return (
    <View>
      <Text>{text.firstname}</Text>
      <Text>{text.lastname}</Text>
      <Text>{text.email}</Text>
      <Text>{text.phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})