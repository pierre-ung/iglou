import React from 'react';
import {
    StyleSheet, View, Image, Text
} from 'react-native';


export default class GameBackground extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <View style={styles.logo_area}>
                <Image  source={require("../assets/logo_iglou.png")}
                        style={styles.logo_style}/>
                </View>
                
                <View style={styles.game_area}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 10,
        alignItems: 'center'
    },
    logo_area: {
        flex: 1,
    },
    logo_style: {
        flex: 1,
        width:100,
        resizeMode: 'contain',
    },
    game_area:{
        marginTop: 20,
        flex: 6,
        backgroundColor: '#fff4ef',
        width: 300,
        height: 10000,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    }
});