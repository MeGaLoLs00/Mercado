import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import RegisIn from '../pages/RegisIn'
import ShoppingList from '../pages/ShoppingList'
import Home from '../pages/Home'
import Tereza from '../pages/Tereza'
import MyLists from '../pages/MyList'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

           <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="RegisIn"
            component={RegisIn}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
           />

            

            <Stack.Screen
            name="ShoppingList"
            component={ShoppingList}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="MyList"
            component={MyLists}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="Tereza"
            component={Tereza}
            options={{headerShown: false}}
           />
           
        </Stack.Navigator>
    );
}