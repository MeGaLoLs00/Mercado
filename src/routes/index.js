import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import RegisIn from '../pages/RegisIn'
import ShoppingList from '../pages/ShoppingList'
import ShoppingList2 from '../pages/ShoppingList2'
import Home from '../pages/Home'
import MyLists from '../pages/MyList'
import Login from '../pages/Login'
import ShoppingListTest from '../pages/ShoppingListTest'
import CreateList from '../pages/CreateList'

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
            name="Login"
            component={Login}
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
            name="ShoppingList2"
            component={ShoppingList2}
            options={{headerShown: false}}
           />
           
            <Stack.Screen
            name="ShoppingListTest"
            component={ShoppingListTest}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="MyList"
            component={MyLists}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="CreateList"
            component={CreateList}
            options={{headerShown: false}}
           />

            
           
        </Stack.Navigator>
    );
}