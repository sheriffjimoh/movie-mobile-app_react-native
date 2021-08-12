import React from 'react';
import {Icon} from 'react-native-elements';


const Customicon = (props)=>{
    
    return(
        <Icon  name={props.iconName}
         containerStyle={props.iconContainerstyle} 
         color={props.iconColor}  
         onPress={ props.iconMethod}  /> 
    )
}

export default Customicon;