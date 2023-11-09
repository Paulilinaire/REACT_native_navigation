import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux/store'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from './screens/HomePage'
import DetailsPage from './screens/DetailsPage'
import AddProductPage from './screens/AddProductPage'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarIconStyle:{display: 'none'},tabBarLabelPosition: "beside-icon"}}>
          <Tab.Screen name='Shopping List' component={HomePage} />
          <Tab.Screen name='Details' component={DetailsPage} />
          <Tab.Screen name='Add a product' component={AddProductPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})