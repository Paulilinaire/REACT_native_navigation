import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Product from '../components/Product'
import { useSelector } from 'react-redux'


export default function HomePage() {
  const products = useSelector(state => state.products.products)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={products} renderproduct={(productData) => {
        return(
          <Product item={itemtData.item}></Product>
        )
      }} keyExtractor={(item, index) => {
        return index
      }}>

      </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop :20,
        paddingHorizontal : 16,
    }
})