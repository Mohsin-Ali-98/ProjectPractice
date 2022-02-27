import React  from "react"
import { View , StyleSheet , Text, Dimensions} from "react-native" 

const windowHeight = Dimensions.get('window').height


const Card = ({name , index }) =>{


    return(
        <View style={styles.mainview}>
            <Text style={styles.text}>{index + 1}</Text>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"grey",
        borderRadius:2,
        alignSelf:"center",
        flexDirection:"row"
        // marginBottom:-20
    },
    text:{
        fontSize:18,
        width:"40%"
    }
    
})

export default Card;