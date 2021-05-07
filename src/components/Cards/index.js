import React from 'react';
import {View,Text} from 'react-native';

import style from './styles';

const Cards = ({titulo, children}) => {

    return(
        <View style={style.cardContainer}>
        <View>
          <Text style={style.cardTitleConfig}>{titulo}</Text>
        </View>
        <View>
            {children}
        </View>
    </View>
    )
}

export default Cards