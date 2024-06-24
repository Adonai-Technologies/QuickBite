import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function RestaurantsCard({item}) {
  return (
    <TouchableOpacity>
    <View className='bg-white rounded-3xl mr-6 shadow-lg'>
      <Image className='w-64 h-36 rounded-t-3xl'source={item.image}/>
        <View className='p-3 pb-4 space-y-2'>
               <Text className='text-lg font-bold'>{item.name}</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}