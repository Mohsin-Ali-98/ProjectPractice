import React  from "react"
import { View , StyleSheet, FlatList, Dimensions} from "react-native" 
import Card from "./card"

const windowHeight = Dimensions.get('window').height

const List = ({names}) =>{



    const ListRender = ({item}) =>{
        return(
           <View  style={styles.card} >
                <Card name={item.title} />
           </View>
        )
    }

    return(
        <View style={styles.mainview}>
              <FlatList
              data={names}
              renderItem={ListRender}
              keyExtractor={(item)=>item.title}
              style={styles.list}
            //   contentContainerStyle={{alignItems:"center"}}
              />
        </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        height:windowHeight,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    list:{
        height:windowHeight,
        width:"80%",
        backgroundColor:"black",
    },
    card:{
        height:windowHeight/20,
        width:"100%",
    }
    
})

export default List;