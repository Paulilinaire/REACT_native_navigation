import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Product(props) {
  const product = props.product

  return (
    <Pressable>
        <View>
            <Text>{product.name} {product.price}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
})