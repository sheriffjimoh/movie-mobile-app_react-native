import React from 'react';
import {View,Text,Button,Pressable, ScrollView} from 'react-native';

import styles from "./Style";

const  Header = () => {
    return(
            <View style={styles.headerContainer}>
                  <View style={styles.buttonGroup}>
                    <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                            <Pressable style={styles.pressable} >
                                <Text style={styles.pressableText}>Nollywood</Text>
                            </Pressable>
                            <Pressable style={styles.pressable}>
                                <Text style={styles.pressableText}>Bollywood</Text>
                            </Pressable>
                            <Pressable style={styles.pressable}>
                                <Text style={styles.pressableText}>Action Film</Text>
                            </Pressable>
                            <Pressable style={styles.pressable}>
                                <Text style={styles.pressableText}>Action Film</Text>
                            </Pressable>
                            <Pressable style={styles.pressable}>
                                <Text style={styles.pressableText}>Action Film</Text>
                            </Pressable>
                    </ScrollView>
                </View>

                <View>
                 <Text>Apphd</Text>      
                </View>
                  
            </View>
    )
}

export default Header;