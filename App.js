import React from 'react';
import { View,ImageBackground,Text,Button} from 'react-native';
import Headercomponent from './components/Headercomponent';
import Banner from './components/Banner';
import styles from './components/Style'
import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.png') }  style={styles.backgroundImage}>
          
        <Headercomponent/>
        <Banner/>
        <Main/>
     
      </ImageBackground>
   
    </View>
  );
}

