import React from 'react'
import {
    StyleSheet, Text, View, ImageBackground, Image
} from 'react-native';
export default class Player extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <Image  style={styles.avatar}
                        source={{uri: "img"}} />
                <Text>Pseudo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 25,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: 25,
        width: '85%'
    },
    avatar:{
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        marginRight: 10
        
    }
});