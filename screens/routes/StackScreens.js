import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {CreateNotes} from "../Notes/CreateNotes";
import {PreviewNotes} from "../Notes/PreviewNotes";
import { Chat } from "../Chat/Chat";

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Preview Notes" component={PreviewNotes} />
            <Stack.Screen name="Create Notes" component={CreateNotes} />
            
        </Stack.Navigator>
    );
}

export const ChatStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );
  }