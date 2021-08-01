import React from 'react';
import {View,Text,Pressable} from 'react-native';

import { Card } from 'react-native-elements';
import styles from './Style'
import Category from './CategoryComponent';

const Banner = () => {
    return (
         <View>

             {/* banner Card */}
                  <Card containerStyle={styles.bannerContainer}>
                        <Card.Image containerStyle={styles.cardImage}  source={require('../assets/banner-6.png')}>
                            <Text style={styles.bannerText}>Indian New Release. </Text>
                        </Card.Image>
                  </Card> 
                  <Category/>
        </View>
    )
}


export default Banner;