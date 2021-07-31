import React from 'react';
import { View,ImageBackground} from 'react-native';


import Header from './components/Header';
import styles from './components/Style'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.png') }  style={styles.backgroundImage}>
      <Header/>
    </ImageBackground>
   
    </View>
  );
}

