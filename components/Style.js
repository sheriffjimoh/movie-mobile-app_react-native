import React from 'react';
import { StyleSheet } from 'react-native';
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
          resizeMode:'cover',
          backgroundColor: '#15172B'
      },
      headerContainer:{
          width:'100%',
          backgroundColor: '#15172B',
          paddingTop:17
         
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
      backgroundColor: '#15172B',
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
    marginLeft:0,
    height:'100%',
    flex:1
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
    },
    textInput:{
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:'#fff',
        width:250,
        padding:10,
        borderRadius:30,
        marginLeft:5,
        marginTop:-5
    },
   

    // drawer styles

    DrawerContent:{
        width:'100%',
        height:'100%',
    },
   TopName:{
    backgroundColor:'#15172B',
    padding:15,
    alignContent:'center',
    alignItems:'center',
    },
    BrandName:{
        color:'#fff',
        alignContent:'center',
        fontSize:30,
        fontFamily:'Baskerville-SemiBoldItalic'
    },
    AppVersion:{
        color:'#fff',  
    },
    DrawerInnerContent:{
        // marginLeft:20
    },
    TopUser:{
        padding:10,
        marginLeft:10,
    },
    UserName:{
        fontSize:20,
        paddingBottom:4,
        fontWeight:'bold'
    },
    UserEmail:{
        fontSize:15,
        color:'#ccc',
        paddingLeft:4
    },

    NavList:{
        padding:10,
        marginLeft:10,
    },
    ListItems:{
        flex:1,
        flexDirection:'row',
        paddingBottom:10
     },
     ListItemsText:{
         paddingTop:5,
         paddingLeft:6
     },
     Category:{
         top:60,
         
     },
     CategoryHeader:{
         fontSize:20,
         fontWeight:'bold',
         fontFamily:'Arial',
         paddingBottom:10,
         marginLeft:20,
     },
     DrawerCategoriesBox:{
         paddingTop:10,
         marginLeft:20,
     },
     CategoriesItem:{
        fontSize:18,
        paddingBottom:10
     },
     DrawerBottom:{
        // backgroundColor:'#15172B',
        padding:15,
        alignContent:'center',
        alignItems:'center',
     },
     BottomLogout:{
        flexDirection:'row',
        padding:10,
     },
     LogoutText:{
         paddingTop:3,
         paddingLeft:6
     }

});

