import React, { useState } from 'react';
import { StyleSheet, View, Alert,KeyboardAvoidingView } from 'react-native';
import Colors from '../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { SELECTEDLIST } from '../data/dummy-data'
import TextContainer from '../components/TextContainer';
import MainButton from '../components/MainButton';
import { POSTS, POSTLIST } from '../data/dummy-data';
import Post from '../models/post';
import PostList from '../models/PostList';

const makePostScreen = props => {
    const itemId = "p4";
    const [itemTitle, setItemTitle] = useState("");
    const [itemOrgLang, setItemOrgLang] = useState("");
    const [itemTrsLang, setItemTrsLang] = useState("");
    const [itemTargetItem, setItemTargetItem] = useState("");
    const itemTransComplete = "no";
    const itemApply = "no";

    const setItemTitleHandler = (text) => {
        setItemTitle(text);
    }

    const setItemOrgLangHandler = (text) => {
        setItemOrgLang(text);
    }

    const setItemTrsLangHandler = (text) => {
        setItemTrsLang(text);
    }

    const setItemTargetHandler = (text) => {
        setItemTargetItem(text);
    }

    const submitButton = (postPlate, postListPlate) => {
        let postItem;
        let postListItem;
        postItem = new Post(itemId, itemTitle, itemOrgLang, itemTrsLang, itemTargetItem,itemTransComplete, itemApply);
        console.log(postItem);
        postListItem = new PostList(itemId, itemTitle, itemOrgLang, itemTrsLang);
        postPlate.push(postItem);
        postListPlate.push(postListItem);
        Alert.alert("Success", "Post created Completly!!", [{
            text: "Success",
            onPress: () => props.navigation.navigate({
                routeName: 'DisplayPost'
            }),
        }],
            { cancelable: false }
        );
    }

    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps={"always"}
         style={{flex : 1}}
         >
            <TextContainer
                description={"Title : "}
                value={itemTitle}
                itemHandler={setItemTitleHandler}
                placeholder={"type your title"}
            />
            <TextContainer
                description={"Original Language : "}
                value={itemOrgLang}
                itemHandler={setItemOrgLangHandler}
                placeholder={"type Orginal Language"}
            />
            <TextContainer
                description={"Required Language : "}
                value={itemTrsLang}
                itemHandler={setItemTrsLangHandler}
                placeholder={"type Required Language "}
            />
            <TextContainer
                description={"Target url : "}
                value={itemTargetItem}
                itemHandler={setItemTargetHandler}
                placeholder={"type url"}
            />
            <MainButton onPress={() => submitButton(POSTS, POSTLIST)}>Submit!!</MainButton>
        </KeyboardAwareScrollView>
    )
};

makePostScreen.navigationOptions = navData => {
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

export default makePostScreen;