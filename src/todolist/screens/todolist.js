import React ,{useState} from "react"
import { View , StyleSheet,Text, TouchableOpacity, TextInput, FlatList, Dimensions, Alert} from "react-native" 
import Card from "../components/card"
import List from "../components/list"
import Searchbar from "../components/textinput"

const dimensionHeight = Dimensions.get("window").height


const DATA = [
   
      {
          title : "Mcdonalds",
      },
      {
        title : "KFC",
     
      },
      {
        title :"Pizza hut",
      },
      {
        title : "Shinwari",
      },

]


const Todolist = () =>{


    const [task , settask] = useState("")
    const [list, setlist] = useState(DATA)

  
    const updatetext = (j) =>{
        settask(j)
    }




    
const removeItem = (title) => {
    let arr = DATA.filter((item) => {
      return item.title  !== title
    })
    setlist(arr)
    console.log(list)
}

// const removeItem = (item,index) => {
//     let arr = DATA.splice(index,1)
//     setlist(arr)
//     console.log(arr)
// }


   const  ListRender = ({item,index}) =>{
        return(
            <TouchableOpacity style={styles.card} onLongPress={()=>{removeItem(item.title)}}>
                <Card name={item.title} index={index}/> 
            </TouchableOpacity>
        )
    }


    const addname = () =>{
      
        if(task != ""){
            DATA.push(
               {
                title:task
               }
            )
            setlist(DATA)
            settask('')
        }else{
            Alert.alert("field empty")
        }

    }



    return(
        <View style={styles.mainview}>
                <View style={styles.inputview}>
                    <View style={styles.input}>
                        <TextInput
                            value={task}
                            onChangeText={(i)=>{updatetext(i)}}
                            placeholder="Enter something to add"
                            style={styles.searchbar}
                        />
                    </View>

                     <View style={styles.btnview}>
                        <TouchableOpacity style={styles.btn}  onPress ={()=>{addname()}}>
                            <Text >+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
               
                <View style={styles.list}>
                   <FlatList
                   data={list}
                   renderItem={ListRender}
                   keyExtractor={(item)=>{item.title}}
                   style={styles.flatlist}
                   
                   />
                </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        height:"100%",
        width:"100%",
        backgroundColor:"#458eed"
    },
    inputview:{
        height:"20%",
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
        
    },
    input:{
        height:"80%",
        width:"80%",
        justifyContent:"center",
    },
    searchbar:{
    height:"50%",
    width:"100%",
    backgroundColor:"grey",
    borderRadius:20,       
    },
    btnview:{
        height:"80%",
        width:"20%",
        borderColor:"white",
        alignItems:"center",
        justifyContent:"center",
    },
    btn:{
        height:"40%",
        width:"70%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        borderColor:"white",
        borderWidth:2
    },
    list:{
        height:"80%",
        width:"100%",
        backgroundColor:"#458eed"
    },
    flatlist:{
        height:"100%",
        width:"80%",
        alignSelf:"center"
    },
    card:{
        height:dimensionHeight/8,
        width:"80%",
        alignSelf:"center",
        marginBottom:20
    }
})

export default Todolist;