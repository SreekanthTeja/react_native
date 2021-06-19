import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatStackNavigator, MainStackNavigator } from "./StackScreens";
import Icon from 'react-native-vector-icons/Feather';
// import { Chat } from "../Chat/Chat";
const Tab = createBottomTabNavigator();
const color="gray"
const size=25
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: 'purple',
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={MainStackNavigator} 
            options={{
                tabBarIcon:() => (
                    <Icon name="home" color={color} size={size}/>
                )
            }}
        />
        <Tab.Screen 
            name="Chat" 
            component={ChatStackNavigator} 
            options={{
                tabBarIcon:() => (
                    <Icon name="message-square" color={color} size={size}/>
                )
            }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;