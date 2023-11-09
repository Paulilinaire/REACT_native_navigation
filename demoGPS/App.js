import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'

export default function App() {
    const [city, setCity] = useState()
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    
    useEffect(() => {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
        error => console.log(error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
    },[])
    
    useEffect(() => {
        axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=vDOKZJIZJer5jd3EUl7UfWMTKwPQm0vd&q=15.8%2C8.00&language=en-us&details=false&toplevel=false')
        .then(response => {
            const data = response.data.LocalizedName
            setCity(data)
        })
    },[])

  return (
    <SafeAreaView>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {longitude}</Text>
      <Text>Ville: {city}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})