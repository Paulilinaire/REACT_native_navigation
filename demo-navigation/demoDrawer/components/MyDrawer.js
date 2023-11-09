import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import MyStack from './MyStack'

const Drawer = createDrawerNavigator()

export default function MyDrawer(){ 
    return(
        <Drawer.Navigator>
              {/* <Drawer.Screen name='MyStack' component={MyStack} options={{headerShown: true}}/> */}
              <Drawer.Screen name='Home' component={Home}/>
          </Drawer.Navigator>
      )
    }

// composant react, bonne pratique : faire un fichier composant pour chaque navigation