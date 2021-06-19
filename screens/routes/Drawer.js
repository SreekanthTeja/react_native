import React from "react";
import TabNavigator from "./TabBar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Chat } from "../Chat/Chat";
import { ChatStackNavigator } from "./StackScreens";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Chat" component={ChatStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;