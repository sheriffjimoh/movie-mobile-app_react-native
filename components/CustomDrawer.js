import React from 'react';
import {View,Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';


const CustomDrawer =(props)=>{
    return(
    <DrawerContentScrollView {...props}>
        <View style={{paddingTop:20}}>
            
          <Text>Drawer content</Text>
          <Text>Drawer content</Text>
          <Text>Drawer content</Text>
          <Text>Drawer content</Text>
        </View>
    </DrawerContentScrollView>
    )
}

export default  CustomDrawer;