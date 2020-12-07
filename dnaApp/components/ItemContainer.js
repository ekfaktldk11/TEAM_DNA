import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors'

const ItemContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.order}>
                {props.order}
            </Text>
            <Text numberOfLines={3} style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.order}>
                {props.orgLang}
            </Text>
            <Text style={styles.order}>
                {props.trsLang}
            </Text>
            <TouchableOpacity style={{flex : 2}} activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.buttonSize}>
                <Text>{props.buttonText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        margin: 10,
        width: '100%',
        height: '30%',
        flexDirection : 'row'
    },
    order: {
        flex : 1,
        paddingRight: 10,
        fontWeight: "bold",
        fontSize: 12
    },
    title: {
        flex : 4,
        paddingRight: 10,
        fontSize: 12
    },
    buttonSize:{
        backgroundColor : Colors.primary,
        paddingVertical : 5,
        paddingHorizontal : 12,
        borderRadius : 25
    },
    buttonText:{
        flex : 2,
        color : 'white',
        fontSize : 8
    }
});

export default ItemContainer;