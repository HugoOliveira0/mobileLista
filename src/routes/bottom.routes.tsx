import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import List from "../pages/list";
import User from "../pages/user";
import CustomTabBar from "../components/customTabBar";

const Tab = createBottomTabNavigator();

export function BottomRoutes() {
    return(

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <CustomTabBar {...props}/>}
        >

            <Tab.Screen 
                name="User"
                component={User}
                options={{title: "Usuário"}}
            />
            
            <Tab.Screen 
                name="List"
                component={List}
                options={{title: "Lista"}}
            />

        </Tab.Navigator>
    )
}