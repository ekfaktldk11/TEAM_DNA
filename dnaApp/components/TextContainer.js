import React from 'react';
import Colors from '../constants/colors';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const TextContainer = props => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.description}>{props.description}</Text>
            <TextInput style={styles.textinput} placeholder={props.placeholder}
                value = {props.value}
                onChangeText={(text) => props.itemHandler(text)}
                maxLength = {40}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection : 'row',
        padding : 10,
        margin : 10
    },
    description : {
        fontSize : 15,
        fontWeight : 'bold',
        width : '30%',
        alignContent : 'center',
        alignSelf : 'center'
    },
    textinput : {
        borderRadius : 25,
        marginHorizontal : 10,
        width : '60%',
        borderWidth : 5,
        borderColor : Colors.primary,
        textAlign : 'center'
    }
});

export default TextContainer;