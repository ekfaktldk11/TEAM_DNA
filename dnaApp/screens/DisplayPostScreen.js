import React, { useState } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Alert,
    FlatList
} from 'react-native';

import { POSTLIST, SELECTEDLIST } from '../data/dummy-data';
import ItemContainer from '../components/ItemContainer';
import MainButton from '../components/MainButton';
const DisplayPostScreen = props => {

    const selectedHandler = (itemData, plate) => {
        if (itemData.item.id == 'p4') {
            Alert.alert("Failed", "This post is not translated yet!", [{
                text: "Okay",
                onPress: () => console.log("Ok Pressed"),
            }],
                { cancelable: false }
            );
            return;
        }
        plate.push(itemData.item);
        Alert.alert("Success!!", "Purchase completed", [{
            text: "Okay",
            onPress: () => console.log("Ok Pressed"),
        }],
            { cancelable: false }
        );
    }


    const renderListItem = (itemData) => {
        return (<ItemContainer
            order={itemData.item.id}
            title={itemData.item.title}
            orgLang={itemData.item.orgLang}
            trsLang={itemData.item.trsLang}
            buttonText={"buy!"}
            onPress={() => selectedHandler(itemData, SELECTEDLIST)}
        />)
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={POSTLIST}
                renderItem={renderListItem}
            />
            <MainButton onPress={() => props.navigation.navigate({
                routeName: 'makePost'
            })}>Make a Post</MainButton>
        </View>
    )
};

DisplayPostScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center', //cross axis
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    // button:{
    //     width: Dimensions.get('window') / 4
    // },
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default DisplayPostScreen;