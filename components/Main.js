import React, {useState,useEffect} from 'react';
import { View,Button,RefreshControl,Text,TouchableOpacity,Pressable,ScrollView,ImageBackground} from 'react-native';
import { Card,Icon } from 'react-native-elements';
import styles from './Style';
import {MoviesRecord} from  './Api_mockup';
import Headercomponent from './Headercomponent';
import Banner from './Banner';
import Customicon  from './IconComponent';




console.log(MoviesRecord)
// Header right
export function Test(){
    return ( {   
        headerStyle: {
        backgroundColor:"#15172B",
        },
        headerTintColor: '#fff',
        title:"Browse",
        headerRight:() => (<Customicon iconName={'search'} iconColor='#fff'/> ),
        } ) 
}
const Main = ({navigation}) => {

    // useStates
    const [refreshing, setRefreshing] = useState(false);
    const [getDatas , setData] = useState([]);
    const [getDatasCate , setDataCategory] = useState([]);
    
    const [pressed, setPressed] = useState(false);
    const [activedCategory, setactivedCategory] = useState("");
    const [inputValue, setinputValue] = useState("")


    // Refresh
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        getMovies();
    }, []);


    //  Fetch Movies

    const getMovies = async () => {
        try {
          const response = await fetch('http://172.20.10.5:3000/api/movie/');
          const json = await response.json();
          setData(json.data);
        } catch (error) {
          console.error(error);
        } finally {
        //  console.log('done');
        }
      }
    

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

      
//   Filter Movies by category
const filterMovies = async (key)=>{

    console.log(key);
    try {
        const response = await fetch(`http://172.20.10.5:3000/api/movie/bycategory/${key}`);
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      } finally {
      //  console.log('done');
      }
}

 const OperateSearch = async (inputText) =>{ 

   if (inputText.length > 1) {
          setinputValue(inputText)
              try {
                const response = await fetch(`http://172.20.10.5:3000/api/movie/bysearch/${inputText}`);
                const json = await response.json();
                setData(json.data);
              } catch (error) {
                console.error(error);
              } finally {
              //  console.log('done');
              }
        }
   }


//   useeffect
    useEffect(() => {
            getMovies(); 
            getCategories();
        }, []);

    
    return (
      <ImageBackground source={require('../assets/bg.png') }  style={styles.backgroundImage}>
        <View style={styles.mainContainer}>
          {/* <Headercomponent filterMethod={OperateSearch} inputValue={inputValue}/> */}
          <Banner/>


          {/* Category section */}
              <View style={styles.buttonGroup}>
                <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                    <Pressable style={[styles.pressable, (activedCategory =='all' ? styles.activePressed : ' '),
                       (pressed == false ? styles.activePressed : '' )
                       ]} 
                            onPress={() => { 
                                setactivedCategory('all');
                                 setPressed('true');
                                 getMovies();
                            
                            } } >
                                <Text style={styles.pressableText}>All</Text>
                            </Pressable>
                       
                        {getDatasCate.map((data,index) =>
                        <Pressable key={index} style={[styles.pressable, (activedCategory ==data.name ? styles.activePressed : ' ')]} 
                            onPress={() => { 
                                setactivedCategory(data.name);
                                 setPressed('true');
                                 filterMovies(data.id);
                            
                            } } >
                                <Text style={styles.pressableText}>{data.name}</Text>
                            </Pressable>
                        )}   
                            


                    </ScrollView>
                </View>


       {/* Movie List */}
        <View style={{flex:1}} >
            <ScrollView   style={styles.carddGroup} verticall  
            showsVerticallScrollIndicator={false}
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  tintColor="#fff"
                  titleColor="#fff"
                  progressBackgroundColor="red"
                  title="Refreshing"
                />
              }
            >            
              <View style={styles.rowContainer}>

              {getDatas.map((data, index) => 
              <Card containerStyle={styles.cards}  key={index}>
                        <Card.Image source={{uri:data.image}}></Card.Image>
                        <Text style={styles.cardText}>{data.title}</Text>
                  </Card>
                )}
                 
                  
            </View>
            </ScrollView>
        </View>
    </View>
    </ImageBackground>
    )
}

export default Main;