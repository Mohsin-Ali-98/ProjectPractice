import React  from "react"
import { View , StyleSheet , Text, Dimensions, TouchableOpacity} from "react-native" 

const windowHeight = Dimensions.get('window').height


const EditName = ({route}) =>{

    const {name} = route.params

    return(
        <View style={styles.mainview}>
            
            <View style={styles.nameview}>
            <Text style={styles.text}>NAME : {name}</Text>
            </View>

        <View style={styles.btnview}>
                <TouchableOpacity style={styles.btn}> 
                        <Text style={styles.btntext}>
                            Click here to delete Name
                    </Text>
                </TouchableOpacity>   
        </View>
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:"blue",
        // borderRadius:2,
        // alignSelf:"center",
        // marginBottom:-20
    },
    nameview:{
        height:"20%",
        width:"80%",
        backgroundColor:"grey",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20
    },
    btnview:{
        height:"20%",
        width:"80%",
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40
    },
    btn:{
        height:"100%",
        width:"100%",
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:30,
    },
    btntext:{
        fontSize:20
    }
    
})

export default EditName;