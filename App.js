import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ProfilesScreen from './src/screens/profile/profile';
import RestaurantScreen from './src/screens/restaurant/restaurant';
import ControlScreen from './src/screens/control/control';
import RestaurantsStack from './src/screens/restaurant/restaurantStack';
import SystemInfo from './src/components/SystemInfo';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsStack} />
        <Tab.Screen
          name="Control Panel"
          component={ControlScreen} />
        <Tab.Screen
          name="Profile"
          component={SystemInfo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}