import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { addProduct } from '../redux/productSlice'

export default function AddProductPage() {
  const products = useSelector(state => state.products.products)
  console.log(products);
  const [name, setName] = useState()
  const [price, setPrice] = useState()

  return (
    <SafeAreaView>
      <TextInput style={styles.input} placeholder='votre article'/>
      <View>
        <Button addProduct={addProduct} title="ajouter"></Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
})