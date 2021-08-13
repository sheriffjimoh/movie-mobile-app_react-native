import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Main from './Main';
import {MainCustomHeaderStyles} from './Main';
import CustomDrawer from './CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationComponent =()=>{
    return(
        <NavigationContainer >
            <Drawer.Navigator initialRouteName="Home"  drawerContent={() => <CustomDrawer />} >
            <Drawer.Screen name="Home"  component={Main} options={MainCustomHeaderStyles} />
            {/* <Drawer.Screen name="Notifications" component={Test} /> */}
            </Drawer.Navigator>
       </NavigationContainer>
    )
}

export default NavigationComponent;