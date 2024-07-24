import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";
import HomeScreen from "../HomeScreen/HomeScreen";
import ArtScreen from "../ArtScreen/ArtScreen";

const Stack =  createStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false, //referente ao Tab 
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'blue', 
            },
            headerTintColor: 'white', 
            animationEnabled: true, 
            animationTypeForReplace: 'push', 
          }}>
            <Stack.Screen name="Tab" component={TabNavigation}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Art" component={ArtScreen}/>
        </Stack.Navigator>
    )

}