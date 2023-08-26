import { View, Text, SafeAreaView, ImageComponent,TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import {SliderBox} from 'react-native-image-slider-box'

import Categories from '../components/Categories'

import { handpicked } from '../constants'
import FeaturedRow from '../components/featuredRow'
import Card from '../components/Card'
import Cards from '../components/Card'
import ParallaxImage1 from '../components/ParallaxImage1'

import ParallaxImage2 from '../components/ParallaxImage2'
import Footer from '../components/footer'
import { Link } from '@react-navigation/native'






export default function HomeScreen() {




 
    
  

     //All of the items of the flatlist
     

  
       
  

       const images = [
        require('../assets/finderr11.png'),
        require('../assets/finderr22.png'),
        require('../assets/finderr33.png')
       ]
   
  return (

     
      <SafeAreaView className="bg-white">
        <ScrollView>
        
      <View style={{flexDirection: 'row', marginTop:30}}>
       <Text className="text-semibold text-base ml-5 mt-1"><Icon.MapPin stroke="black" height="16" width="16"/>Jaipur</Text> 
      <Text className="mx-auto text-2xl text-blue-500 text-semibold">Finderr</Text> 
      <Text className="mr-5 mt-2"><Icon.HelpCircle stroke="black" height="20" width="20"/></Text> 
      <Icon.Bell className="mr-7 mt-2"  height="19" width="19"stroke="black"/>
      </View>
      <View className="mt-4 bg-white flex-row items-center space-x-2 px-4 pb-4">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="gray"/>
            <TextInput placeholder='Search Products, Brands, Stores' className="ml-2 flex-1"/>
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                <Icon.MapPin height="20" width="20" stroke="gray"/>
                <Text className="text-gray-600">Jaipur</Text>
            </View>
          </View>
          
      </View>
      <SliderBox  images={images} dotColor="gray" inactiveDotColor="black" autoplay={"true"} autoplayInterval={3000} circleLoop={true}/>
      <View style={{flexDirection: 'row', marginTop:5}}>
      <Text className="font-bold ml-3 mt-5 text-base">Shop by Categories</Text> 
      <Text className="mx-auto mr-3 mt-5 font-semibold text-indigo-700 text-base">View More {'>'}</Text>
      
      </View>
         
          <View className="mt-3 ml-3">
          <Categories/>
            
          </View>

       <View style={{flexDirection: 'row', marginTop:5}}>
       <Text className="font-bold ml-3 mt-5 text-base">Handpicked Products</Text> 
       <Text className="mx-auto mr-3 mt-5 font-semibold text-indigo-700 text-base">View More {'>'}</Text>
       </View>
       <ScrollView horizontal={true}>
       <View style={[{flexDirection:'row', alignItems:'center',marginTop:'3px'}]}>
         <Cards/>
         </View>
        <View/>
        </ScrollView>
        
        <View style={{flexDirection: 'row', marginTop:5,marginBottom:10}}>
       <Text className="font-bold ml-3 mt-5 text-base">View Store Collections</Text> 
       <Text className="mx-auto mr-3 mt-5 font-semibold text-indigo-700 text-base">View More {'>'}</Text>
       </View>

      
       <View style={[{flexDirection:'row', alignItems:'center',marginTop:'5px'}]}>
         <ParallaxImage1/>
         </View>
        <View/>

        <View style={{flexDirection: 'row', marginTop:5,marginBottom:10}}>
       <Text className="font-bold ml-3 mt-5 text-base">Shop By Brands</Text> 
       <Text className="mx-auto mr-3 mt-5 font-semibold text-indigo-700 text-base">View More {'>'}</Text>
       </View>
        
      <View style={[{flexDirection: 'row', marginTop:5, marginBottom:20, alignItems:'center'}]}>
        <ParallaxImage2/>
      </View>
         
      <View >
        <Footer />
      </View>
         

        
       </ScrollView>
     
      </SafeAreaView>

  )
}