import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation()

  return (
    <View>
      <Text>Home</Text>
      <Button
      title='Open Drawer'
      onPress={() => navigation.openDrawer()}
      />
      <Button
      title='Go to Contact'
      onPress={() => navigation.navigate("Contact")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})