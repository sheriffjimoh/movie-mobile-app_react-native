import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Divider} from 'react-native-elements';
import styles from './Style';
import Customicon from './IconComponent';


const CustomDrawer =(props)=>{
    const [getDatasCate , setDataCategory] = useState([]);



      
    // Fetch Categroy

    const getCategories = async () => {
        try {
          const response = await fetch('http://172.20.10.5:3000/api/category/');
          const json = await response.json();
          setDataCategory(json.data);
        } catch (error) {
          console.error(error);
        } finally {
        //  console.log('done');
        }
      }

      //   useeffect
    useEffect(() => {
        getCategories();
    }, []);
    
    return(
        <View style={styles.DrawerContent}>   
            <View style={styles.TopName}>
                <Text style={styles.BrandName}>MovieZec</Text>
                <Text style={styles.AppVersion}>V 1.0.0</Text>
            </View>  
            <DrawerContentScrollView>
              <View style={styles.DrawerInnerContent}>      
                
                <View style={styles.TopUser}>
                    <Text style={styles.UserName}>@SheriffJimoh</Text>
                    <Text style={styles.UserEmail}>Sheriffjimoh@gmail.com</Text>
                </View>
                <Divider orientation="vertical" width={5} />
                    <View style={styles.NavList}>
                         <View style={styles.ListItems} >
                             <Customicon iconName='movie'/>
                             <Text style={styles.ListItemsText}>  Feed List</Text> 
                         </View>  
                         <View style={styles.ListItems} >
                             <Customicon iconName='info'/>
                             <Text style={styles.ListItemsText}> About App</Text> 
                         </View>  
                    </View>
                
                
                <View style={styles.Category}>
                        <Text style={styles.CategoryHeader}>Movie Categories</Text>
                         <Divider orientation="vertical" width={5} />
                         <View style={styles.DrawerCategoriesBox}>
                            {getDatasCate.map((data,index) =>
                            <Text  style={styles.CategoriesItem} key={index}>{data.name} </Text>)}
                            
                         </View>
                       
                </View>
                
                
                </View>
            </DrawerContentScrollView>
            <View style={styles.DrawerBottom}>
                       <View style={styles.BottomLogout} >
                             <Customicon iconName='logout'/>
                             <Text style={styles.LogoutText}> Log out</Text> 
                         </View>  
            </View>
        </View>  
    )
}

export default  CustomDrawer;