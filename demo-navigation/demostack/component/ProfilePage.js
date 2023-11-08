import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfilePage({navigation, route}) {
  const profil = route.params.profil

  return (
    <View>
      <Text>Prénom: {profil.firstname}</Text>
      <Text>Nom: {profil.lastname}</Text>
      <Text>Email: {profil.email}</Text>
      <Text>Téléphone: {profil.phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})