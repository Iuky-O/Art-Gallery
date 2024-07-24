import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'

import HomeScreen from "../HomeScreen/HomeScreen";
import ArtScreen from "../ArtScreen/ArtScreen";
import CategoryScreen from "../CategoryScreen/CategoryScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'pink',
        headerTransparent: true, //reefrente ao stack
    }}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Art" component={ArtScreen}/>
        <Tab.Screen name="Category" component={CategoryScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}