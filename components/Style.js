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
        height:height
      },
      backgroundImage:{
          flex:1,
          width:'100%',
          height:'100%',
          resizeMode:'cover'
      },
      headerContainer:{
          width:'100%',
          backgroundColor: '#15172B',
          paddingTop:20
         
      },
      buttonGroup:{
          flexDirection:"row",
          justifyContent:'space-between',
          alignContent:'center',
          borderBottomColor:'#ede9e8',
          borderBottomWidth:0.5,
          paddingTop:5
          
         },
     pressable:{
        
     },
     activePressed:{
        borderBottomColor:'#fff',
        borderBottomWidth:2,
     },
     pressableText:{
        color:'#fff',
         fontSize:20,
         padding:10

     },

    //  Banner styles

    bannerContainer:{
      width:'100%',
      margin:0,
      padding:0,
      backgroundColor:'red',
      borderWidth:0,
      },
      cardImage:{
       justifyContent:'center',
       textAlign:'center',
      
        
      },
      bannerText:{
        top:55,
        justifyContent:'center',
        textAlign:'center',
        fontSize:35,
        fontWeight:'800',
        
        color:"#ffff"

    },
    // category rows



    categoryContaniner:{
       flex:1,
       flexDirection:'row',
       flexBasis:'100%', //flexbasis  make it appear
       borderBottomWidth:2,
       borderBottomColor:'red',
       padding:5

    },


    // main movie list design

    mainContainer:{
    marginRight:0,
    marginLeft:0
    },
    rowContainer:{
      flex:3,
      flexDirection:'row',
      flexBasis:'100%',
      flexWrap:'wrap',
      marginLeft:0
    },
    cards:{
        flexBasis:'42%',
        backgroundColor:'#15172B',
        padding:0,
    },

    cardText:{
        textAlign:'center',
        color:'#fff',
        padding:5,
        top:3,
        bottom:3
    }
   

});

