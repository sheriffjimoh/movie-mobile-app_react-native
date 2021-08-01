import React from 'react';
import {View} from 'react-native';
import {Header} from 'react-native-elements';
import styles from "./Style";

const  Headercomponent = () => {
    return(
            <View style={styles.headerContainer}>
                  <Header
                    style={styles.headerContainer}
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Browse', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'search', color: '#fff' }}
                    containerStyle={styles.headerContainer}
                    />
            </View>
    )
}

export default Headercomponent;