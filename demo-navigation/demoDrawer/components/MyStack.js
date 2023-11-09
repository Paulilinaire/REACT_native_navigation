import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import MyDrawer from "./MyDrawer";
import MyButton from "./MyButton";

const Stack = createNativeStackNavigator()

export default function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name='Drawer' component={Home} options={{title: "Accueil"}}/> */}
            <Stack.Screen name='MyDrawer' component={MyDrawer} />
            <Stack.Screen name='Contact' component={Contact} options={{headerShown: true, headerRight : MyButton, headerStyle: {backgroundColor: "#f4511e"}}}/>
        </Stack.Navigator>
    )
}