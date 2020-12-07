import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MainButton from '../components/MainButton';
const HomeScreen = props => {

    return (
        <View>
            <View>
                <MainButton onPress={() => props.navigation.navigate({
                    routeName: 'DisplayPost'
                })}>Purchase</MainButton>
                <MainButton onPress={() => props.navigation.navigate({
                    routeName: 'MySale'
                })}>My List</MainButton>
            </View>
        </View>
    )
};

HomeScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 30 : 5,
        width: 400,
        maxWidth: '90%'
    },
    listConatiner: {
        flex: 1,
        width: Dimensions.get('window').width > 350 ? '60%' : '80%',
    },
    list: {
        flexGrow: 1, // can access of boundaries // If
        // alignItems: 'center', // automatically 'center' in <FlatList>..?
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export default HomeScreen;