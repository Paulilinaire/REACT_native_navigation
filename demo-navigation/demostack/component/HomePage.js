import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomePage({navigation}) { 

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.contactView}>
      <Text>Tam Lam</Text>
      <Button title="détails" onPress={() => navigation.navigate("ProfilePage",{profil : {id: 1, lastname: "Lam", firstname: "Tam", email: "lam.tam@example.com", phone: "00.00.00.00"}})}></Button>
    </View>
    <View style={styles.contactView}>
      <Text>Clémence Petit</Text>
      <Button title="détails" onPress={() => navigation.navigate("ProfilePage",{profil : {id: 2, lastname: "Petit", firstname: "Clémence", email: "petit.clem@example.com", phone: "00.00.00.00"}})}></Button>
    </View>
    <View style={styles.contactView}>
      <Text>Olivia Pigani</Text>
      <Button title="détails" onPress={() => navigation.navigate("ProfilePage",{profil : {id: 3, lastname: "Pigani", firstname: "Olivia", email: "olivia@example.com", phone: "00.00.00.00"}})}></Button>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contactView : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  }
})