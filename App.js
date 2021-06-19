// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './screens/routes/Drawer';
function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
}

export default App;
