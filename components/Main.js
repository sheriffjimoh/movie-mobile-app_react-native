import React from 'react';
import { View,Button,Text,TouchableOpacity,ScrollView} from 'react-native';
import { Card,Icon } from 'react-native-elements';
import styles from './Style';
const Main = () => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView   style={styles.carddGroup} verticall  showsVerticallScrollIndicator={false}>            
            <View style={styles.rowContainer}>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/blackwidow.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Black widow .</Text>
                  </Card>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/captainmarvel.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Captain mavel .</Text>
                  </Card>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/jumaji.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Jumaji The Next Level.</Text>
                  </Card>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/banner-1.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Black Movie.</Text>
                  </Card>

                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/banner-1.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Black Movie.</Text>
                  </Card>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/banner-2.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Black Movie.</Text>
                  </Card>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/fast.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Fast & Furious.</Text>
                  </Card>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/banner-3.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Black Movie.</Text>
                  </Card>
                  <Card containerStyle={styles.cards}>
                        <Card.Image source={require('../assets/banner-1.jpg')}></Card.Image>
                        <Text style={styles.cardText}>Black Movie.</Text>
                  </Card>
                  
            </View>
            </ScrollView>
        </View>
    )
}

export default Main;