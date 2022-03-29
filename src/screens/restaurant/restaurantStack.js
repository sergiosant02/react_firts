import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import RestaurantScreen from './restaurant'
import RestaurantDetailScreen from './RestaurantDetailScreen'


const Stack = createNativeStackNavigator()

export default function RestaurantsStack () {
  return (
        <Stack.Navigator>
            <Stack.Screen
                name='RestaurantsScreen'
                component={RestaurantScreen} />
            <Stack.Screen
                name='RestaurantDetailScreen'
                component={RestaurantDetailScreen} />
        </Stack.Navigator>
  )
}