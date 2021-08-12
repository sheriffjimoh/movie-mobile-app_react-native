import React from 'react';
import { View} from 'react-native';
import styles from './components/Style';
import NavigationComponent from './components/NavigationComponent';


export default function App() {
  return (  
    <View style={styles.container}>
      <NavigationComponent/>
    </View>
  );
}

