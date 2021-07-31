import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#15172B',
        width:width,
        height:height,

      },
      backgroundImage:{
          flex:1,
          width:'100%',
          height:'100%',
          resizeMode:'cover'
      },
      headerContainer:{
          top:10,
          width:'100%',
      },
      buttonGroup:{
          flexDirection:"row",
          justifyContent:'space-between',
          alignContent:'center',
          padding:20,
          backgroundColor:'#fff',
          
         },
     pressable:{
        
     },
     pressableText:{
        color:'#15172B',
         fontSize:23,
         padding:10

     }


});

