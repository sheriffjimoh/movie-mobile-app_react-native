import React, { useState } from 'react';
import {View, TextInput} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import styles from "./Style";
import Customicon  from './IconComponent';


const  Headercomponent = (props) => {
        const [isSet, setIt] = useState(false);
        const toggleSearch = ()=>{ 
                const  issetValue = (isSet ? false : true);
                setIt(issetValue); 
        }

        const OperateDrawer = ()=>{  return console.log('hello')}

       

    return(
         <View style={styles.headerContainer}>
                  <Header
                    style={styles.headerContainer}
                    leftComponent={<Customicon iconName='menu' iconMethod={OperateDrawer} iconColor='#fff'/>}
                    centerComponent={{ text: (isSet ? <TextInput  defaultValue={props.inputValue} style={styles.textInput}  onChangeText={props.filterMethod} placeholder='Search movie'></TextInput> : 'Browse') , style: { color: '#fff' } }}
                    rightComponent={<Customicon iconName={(isSet ? 'cancel':'search')} iconMethod={toggleSearch} iconColor='#fff'/>}
                    containerStyle={styles.headerContainer}
                    />
       </View>
    )
}

export default Headercomponent;