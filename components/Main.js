import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';


const Main = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.rowContainer}>
               <View style={styles.boxContainer}>
                  {/* image here */}
                  <Card>
                       <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('../assets/bg.png')}>
                                <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                                <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='VIEW NOW' />
                        </Card.Image>
                  </Card>
               </View>
            </View>
        </View>
    )
}

export default Main;