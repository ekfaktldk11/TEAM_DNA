import React from 'react';
import { StyleSheet, FlatList, Alert } from 'react-native';
import Colors from '../constants/colors';
import ItemContainer from '../components/ItemContainer';
import { SELECTEDLIST } from '../data/dummy-data'

const MySaleScreen = props => {

    const selectedHandler = (itemData) => {
        let itemToText = "Title : " + itemData.item.title
            + "\n\nOriginal Language : " + itemData.item.orgLang
            + "\n\nRequired Language : " + itemData.item.trsLang;
        Alert.alert("Item Detail", itemToText, [{
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
            buttonText={"Detail"}
            onPress={() => selectedHandler(itemData)}
        />)
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={SELECTEDLIST}
            renderItem={renderListItem}
        />
    )
};

MySaleScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%'
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
});

export default MySaleScreen;