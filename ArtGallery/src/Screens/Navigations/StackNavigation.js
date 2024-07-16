import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";
import HomeScreen from "../HomeScreen/HomeScreen";
import ArtScreen from "../ArtScreen/ArtScreen";

const Stack =  createStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: 'blue', 
            },
            headerTintColor: 'white', 
            animationEnabled: true, 
            animationTypeForReplace: 'push', 
            headerTransparent: true,
          }}>
            <Stack.Screen name="Tab" component={TabNavigation} 
                options={({ navigation }) => ({
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')} 
                        style={{ marginRight: 15 }}>
                        <Image source={require('')} style={styles.imageLogo}/>
                    </TouchableOpacity>
                ),
                headerTintColor: 'blue'
          })}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Art" component={ArtScreen}/>
        </Stack.Navigator>
    )

}