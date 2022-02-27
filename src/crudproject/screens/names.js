import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Alert
}
from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import NameCard from '../components/namecard'

const HeightDimension = Dimensions.get("window").height


const DATA = [
   
    {
        title : "Levi",
    },
    {
      title : "Kawaki",
   
    },
    {
      title :"Nezuko",
    },
    {
      title : "Tanjiro",
    },

]


let selectedIndex = null; 

let placeholdername = "" ;



const NamesList = () =>{

    const[text,settext] = useState("")
    const [Name,setName]=useState(DATA)
    const[popmodal,setpopmodal] = useState(false)
    const[editModal,seteditModal] = useState(false)
    const[addnameModal,setaddnameModal] = useState(false)

    // let selectedIndex = null; 

  
const RenderNames = ({item , index}) =>{
    return(
        <TouchableOpacity style={styles.card} onLongPress={()=>{Pop(index , item.title)}} >
            <NameCard name={item.title} id={index}/>
        </TouchableOpacity>
    )
}
 
    
const addname = () =>{
    return(
     setaddnameModal(true)
    )
 }
 
 const textupdate = (j) =>{
     settext(j)
 }
 
 
 const register = () =>{
     
     if(text != ""){
         DATA.push({
             title:text
         })
         setName(DATA)
         setaddnameModal(false)
         settext('')
     }else{
         Alert.alert("field empty")
     }
 
    
 }
 


const Pop = (index , title) =>{
    selectedIndex=index
    placeholdername=title
     setpopmodal(true)
}

const Edit = () =>{

        seteditModal(true)
}

const Editname = (selectedIndex) =>{
    let editarr = DATA.splice(selectedIndex,1,{title:text})
    setName(editarr)
    setpopmodal(false)
    seteditModal(false)
    settext('')
    Alert.alert("Name Edited")
    console.log(editarr)
}

const Delete = ({selectedIndex}) =>{
    let delarr = DATA.filter((index) => {
        return index  != selectedIndex
      })
      setName(delarr)
      setpopmodal(false)
      settext('')
      console.log(delarr)
    //   Alert.alert("Name Deleted")
      
}

// const Delete = (selectedIndex) =>{
//     let delarr = DATA.splice(selectedIndex, 1)
//       setName(delarr)
//       setpopmodal(false)
//       settext('')
//       console.log(delarr)
//     //   Alert.alert("Name Deleted")
      


    return (
        <View style ={ styles.mainview}>
            <View style={styles.listview}>
                <FlatList
                data={Name}
                renderItem={RenderNames}
                keyExtractor={(item)=>{item.title}}
                style={styles.flatlist}
                />
            </View>
           
           
            <View style={styles.btnview}>
                <TouchableOpacity style={styles.btn} onPress={()=>{addname()}}>
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.modalview}>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={addnameModal}
                    onRequestClose={() => {
                        Alert.alert("Name not added");
                        setaddnameModal(!addnameModal);
                    }}
                    // style={styles.modalview}
                    >
                        <View style={styles.modal}>
                            <View style={styles.editview}>
                                    <View style={styles.textinput}>
                                            
                                            <Text>Enter Name to add</Text>
                                           
                                            <TextInput
                                            value={text}
                                            onChangeText={(i)=>{textupdate(i)}}
                                            placeholder={placeholdername}
                                            style={styles.inputfield}
                                            />
                                    </View>

                                    <View style={styles.btnviewmodal}>
                                        <TouchableOpacity style={styles.btnmodal} onPress={()=>{register()}}>
                                            <Text style={styles.text}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>
                    </Modal>
            </View>





            <View style={styles.modalview}>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={popmodal}
                    onRequestClose={() => {
                        Alert.alert("No action Performed");
                        setpopmodal(!popmodal);
                    }}
                    // style={styles.modalview}
                    >
                        <View style={styles.modal}>
                            <View style={styles.popbtnview}>
                                   
                                        <TouchableOpacity style={styles.popbtn} onPress={()=>{Edit()}}>
                                                <Text style={styles.text}>Edit </Text>
                                            </TouchableOpacity> 
    

                                    
                                        <TouchableOpacity style={styles.popbtn} onPress={()=>{Delete(selectedIndex)}}>
                                            <Text style={styles.text}>Delete</Text>
                                        </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
            </View>


            <View style={styles.modalview}>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={editModal}
                    onRequestClose={() => {
                        Alert.alert("Name not edited");
                        seteditModal(!editModal);
                    }}
                    // style={styles.modalview}
                    >
                        <View style={styles.modal}>
                            <View style={styles.editview}>
                                    <View style={styles.textinput}>
                                            
                                            <Text>Edit Name</Text>
                                           
                                            <TextInput
                                            value={text}
                                            onChangeText={(i)=>{textupdate(i)}}
                                            placeholder={text}
                                            style={styles.inputfield}
                                            />
                                    </View>

                                    <View style={styles.btnviewmodal}>
                                        <TouchableOpacity style={styles.btnmodal} onPress={()=>{Editname(selectedIndex)}}>
                                            <Text style={styles.text}>Edit</Text>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>
                    </Modal>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        height:"100%",
        width:"100%",
        backgroundColor:"#4949e3"
        // backgroundColor:"black"
    },
    listview:{
        height:"80%",
        width:"100%",
        backgroundColor:"#4949e3",
    },
    flatlist:{
        height:"100%",
        width:"80%",
        backgroundColor:"#4949e3",
        alignSelf:"center",
        marginTop:10
    },
    card:{
        height:HeightDimension/8,
        width:"100%",
        marginBottom:20
    },
    btnview:{
        height:"20%",
        width:"100%",
        backgroundColor:"#4949e3",
        justifyContent:"center",
        alignItems:"flex-end"
    },
    btn:{
        height:"50%",
        width:"20%",
        backgroundColor:"#458eed",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"white",
        borderWidth:2,
        borderRadius:40,
        marginRight:20
    },
    text:{
        fontSize:20
    },
    modalview:{
        height:HeightDimension,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"purple",
        // alignSelf:"center"
    },
    modal:{
        height:HeightDimension/2,
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:100,
        // backgroundColor:"black"
    },
    editview:{
        height:"100%",
        width:"100%", 
        justifyContent:"center",
        alignItems:"center",
        
        
    },
    textinput:{
        height:"80%",
        width:"100%",
        backgroundColor:"#bd5757",
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    inputfield:{
        height:"20%",
        width:"80%",
        backgroundColor:"grey",
        borderRadius:20
    },
    btnviewmodal:{
        height:"30%",
        width:"100%",
        backgroundColor:"#bd5757",
        justifyContent:"center",
        alignItems:"flex-end",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
        
    },
    btnmodal:{
        height:"50%",
        width:"20%",
        backgroundColor:"#458eed",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"white",
        borderWidth:2,
        borderRadius:40,
        marginRight:20
    },


    popbtnview:{
        height:"50%",
        width:"100%",
        backgroundColor:"#bd5757",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
       borderRadius:20
    },
    popbtn:{
        height:"40%",
        width:"30%",
        backgroundColor:"#458eed",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"white",
        borderWidth:2,
        borderRadius:20,
    }

})

export default NamesList;