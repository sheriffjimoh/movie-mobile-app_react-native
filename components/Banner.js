import React from 'react';
import {View,Text} from 'react-native';

import { Card } from 'react-native-elements';
import styles from './Style'

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
                  <Card>
                        <Card.Image source={require('../assets/bg.png')}>
                                <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                        </Card.Image>
                  </Card> 
        </View>
    )
}


export default Banner;