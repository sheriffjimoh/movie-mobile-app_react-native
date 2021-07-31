import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';


const Main = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.rowContainer}>
               <View style={styles.boxContainer}>
                  {/* image here */}
                  <View style={styles.captionContainer}>
                     <Text style={styles.title}>Atiku Need</Text>
                     <Text style={styles.year}>Movie 2021</Text> 
                     <TouchableOpacity style={styles.button} onPress="">
                          <Text style={ styles.buttonText}>Watch Now</Text>
                      </TouchableOpacity>
                  </View>
                 
               </View>
            </View>
        </View>
    )
}

export default Main;