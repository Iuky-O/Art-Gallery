import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'

import HomeScreen from "../HomeScreen/HomeScreen";
import ArtScreen from "../ArtScreen/ArtScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'pink',
        tabBarActiveBackgroundColor: 'blue',
        tabBarStyle:{
            backgroundColor: 'pink',  
        },
    }}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Art" component={ArtScreen}/>
    </Tab.Navigator>
  )
}