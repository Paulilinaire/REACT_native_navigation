import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

export default function App() {
    const [value, setValue] = useState({lastname : "", firstname: ""})

    // //stochage string
    // const addData = async () => {
    //     try {
    //         await AsyncStorage.setItem('storageKey', 'popo')
    //         //await AsyncStorage.setItem('storageKey2', 'popo2')
    //     } catch(error){
    //         console.log(error);
    //     }
    // }

    // const getData = async = async () => {
    //     try {
    //       const myValue = await AsyncStorage.getItem('storageKey')
    //         setValue({ lastname: myValue, firstname: myValue})
    //     } catch(error){
    //         console.log(error);
    //     }
    // }

    // const deleteData = async = async () => {
    //     try {
    //       const myValue = await AsyncStorage.removeItem('storageKey')

    //       if(myValue !== null){
    //         setValue({ lastname: myValue, firstname: myValue})
    //       }
    //     } catch(error){
    //         console.log(error);
    //     }
    // }

    // stockage Objet
    const addData = async () => {
        try {
            await AsyncStorage.setItem('storageKeyobject',JSON.stringify({ nom : "tata", prenom : "titi"}))
        }catch(error){
            console.log(error)
        }

    }

    const getData = async () => {
        try {
            const maValue = await AsyncStorage.getItem('storageKeyobject')
            if(maValue !== null){
                setValue(JSON.parse(maValue))
            }
        }catch(error){
            console.log(error)
        }
    }

    const deleteData= async () => {
        try {
            const maValue = await AsyncStorage.removeItem('storageKeyobject')
            setValue({ nom : "", prenom : ""})
           
        }catch(error){
            console.log(error)
        }
    }

  return (
    <View>
      <Text>First name : {value.firstname}</Text>
      <Text>Last name : {value.lastname}</Text>
      <Button title='Add Data' onPress={addData}/>
      <Button title='Get Data' onPress={getData}/>
      <Button title='Delete Data' onPress={deleteData}/>
    </View>
  )
}

const styles = StyleSheet.create({})