import { Pressable } from "react-native";
import { Text, StyleSheet } from 'react-native';


export default function MyButton(){
    return(
        <Pressable onPress={() => {console.log("clic");}}>
            <Text>Clic</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({})