import React from 'react';
import {View,Text} from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Style'

const Banner = () => {
    return (
         <View>
                  <Card containerStyle={styles.bannerContainer}>
                        <Card.Image containerStyle={styles.cardImage}  source={require('../assets/banner-6.png')}>
                            <Text style={styles.bannerText}>Indian New Release. </Text>
                        </Card.Image>
                  </Card> 
        </View>
    )
}


export default Banner;