import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import RegisIn from '../pages/RegisIn'
import TelaInicio from '../pages/TelaInicio'

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
            name="TelaInicio"
            component={TelaInicio}
            options={{headerShown: false}}
           />
           
        </Stack.Navigator>
    );
}