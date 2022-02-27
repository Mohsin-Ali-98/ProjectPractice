import React ,{useState} from "react"
import { View , StyleSheet,TextInput} from "react-native" 


const Searchbar = ({inputupdate}) =>{



    return(
        <View style={styles.mainview}>
               <TextInput
               onChangeText={(i)=>inputupdate(i)}
               placeholder="enter something"
               style={styles.inputfield}
               /> 
        </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    inputfield:{
        height:"50%",
        width:"90%",
        backgroundColor:"grey",
        borderRadius:20
    }
})

export default Searchbar;