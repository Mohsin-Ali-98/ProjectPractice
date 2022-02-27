import React  from "react"
import { View , StyleSheet , Text, Dimensions, TouchableOpacity} from "react-native" 
import { createStackNavigator } from "@react-navigation/stack"
import NamesList from "../screens/names"
import EditName from "../screens/editname";
import NameCard from "../components/namecard";

const Stack = createStackNavigator();


const NavigationStacks = () =>{


    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerShown:false,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
            <Stack.Screen name="Home" component={NamesList}/>
            <Stack.Screen name="details" component={NameCard}/>
            <Stack.Screen name="Edit" component={EditName}/>
        </Stack.Navigator>
    )
}


export default NavigationStacks;