import React from "react"
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

const windowHeight = Dimensions.get('window').height


const NameCard = ({ name, id }) => {

    const navigation = useNavigation();

    const editname = () => {
        navigation.navigate('Edit', {
            name
        })
    }

    return (
        <View style={styles.mainview}>
            <Text style={styles.text}>{id + 1}</Text>
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext} onPress={() => { editname() }}>
                    -{">"}
                </Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainview: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "grey",
        borderRadius: 20,
        flexDirection: "row"
        // alignSelf:"center",
        // marginBottom:-20
    },
    btn: {
        height: "100%",
        width: "20%",
        // backgroundColor:"red",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        width: "30%"
    },
    btntext: {
        fontSize: 40
    }

})

export default NameCard;