import { View, Text, ScrollView, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { categories } from '../constants'
import { createNavigatorFactory } from '@react-navigation/native'

export default function Categories() {
  return (
    <View>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}
       className="overflow-visible"
       contentContainerStyle={{
        paddingHorizontal: 15
       }}>
        {
            categories.map((categories,index)=>{
                return (
                    <View key={index} className="flex justify-center items-center mr-6">
                        <TouchableOpacity className="p-1 rounded-full shadow bg-black-400">
                            <Image style={{width:60, height:60}} source={categories.image} className="rounded-full"/>
                            
                        </TouchableOpacity>
                        <Text className="font-semibold text-cyan-400">{categories.name}</Text>
                    </View>

                 
                )
            })
        }

       </ScrollView>
    </View>
  )
}