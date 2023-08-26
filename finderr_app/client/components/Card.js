import {StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import {Avatar, Button, Card} from 'react-native-paper'
import { handpicked } from '../constants'
const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>


export default function Cards1(){

    return(
       
     
        <View style={styles.container} horizontal={true}>
           
           {
                handpicked.map((item,index)=>{
                    return(
                        <Card style={styles.cardBox}>

                        <Card.Cover source={item.image} style={styles.img} />
                        <Card.Content>
                            <Text variant="titleLarge" className="font-bold mb-1">{item.name}</Text>
                            <Text variant="titleLarge" className="font-semibold">{item.Address}</Text>
                            <Text variant="bodyMedium" className="font-bold">{item.price}</Text>
                        </Card.Content>
                    </Card>
                    )
                })
           
           }
          
          
      
        </View>
      
       
       
    
        
    )
}


const styles = StyleSheet.create({
   container:{
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
       
    cardBox:{
        margin:10,
       
    },
    img:{
        padding:'auto',
        height:200,
        width:200,
        
    }
    



})