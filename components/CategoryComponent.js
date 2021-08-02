import React, { useState } from 'react';
import {View,Text, Pressable,ScrollView} from 'react-native';

import styles from './Style';

const Category = () => {

     const [pressed, setPressed] = useState(false);
     const [activedCategory, setactivedCategory] = useState(" ");
    return (
    
       <View >
            <View style={styles.buttonGroup}>
                    <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                           
                            <Pressable style={[styles.pressable, (activedCategory =='nollywood' ? styles.activePressed : ' ')]} 
                            onPress={() => { setactivedCategory('nollywood'); setPressed('true'); } } >
                                <Text style={styles.pressableText}>Nollywood</Text>
                            </Pressable>


                            <Pressable style={[styles.pressable, (activedCategory =='bollywood' ? styles.activePressed : ' ')]} 
                            onPress={() => { setactivedCategory('bollywood'); setPressed('true'); } } >

                                <Text style={styles.pressableText}>Bollywood</Text>
                            </Pressable>

                           <Pressable style={[styles.pressable, (activedCategory == 'yorubamovie' ? styles.activePressed : ' ')]} 
                            onPress={() => { setactivedCategory('yorubamovie'); setPressed('true'); } } >
                                <Text style={styles.pressableText}>Yoruba Films</Text>
                            </Pressable>

                         
                           <Pressable style={[styles.pressable, (activedCategory == 'actionfilm' ? styles.activePressed : ' ')]} 
                            onPress={() => { setactivedCategory('actionfilm'); setPressed('true'); } } >
                                <Text style={styles.pressableText}>Action Films</Text>
                            </Pressable>

                            
                           <Pressable style={[styles.pressable, (activedCategory == 'musical' ? styles.activePressed : ' ')]} 
                            onPress={() => { setactivedCategory('musical'); setPressed('true'); } } >

                                <Text style={styles.pressableText}>Musical</Text>
                            </Pressable>
                    </ScrollView>
                </View>
               <Text>{activedCategory}</Text> 
        </View>
      
    )
}

export default Category;