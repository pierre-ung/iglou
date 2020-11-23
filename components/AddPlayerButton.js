import React from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Image, FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function addPlayerInit() {
    console.log("Pressed")
}


export default class AddPlayerButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            onPress: this.props.onPress
        }
    }
    render() {

        return (
            <View style={styles.main_container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.onPress}>
                    <Text> Add a player </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main_container: {

    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: 'lightgray'
    }
});
