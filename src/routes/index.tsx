import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/login";
import { BottomRoutes } from "./bottom.routes";
import { StackScreen } from "react-native-screens";

const Stack = createNativeStackNavigator();

export function Routes() {
    return(
        <Stack.Navigator
            initialRouteName="Login"
        >

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Tabs"
                component={BottomRoutes}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}
