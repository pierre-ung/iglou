import React from 'react';
import {
    StyleSheet, Text, View, ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
//Components homemade
import LogoArea from '../components/LogoArea.js'
import Button from '../components/Button.js'
import { Component } from 'react';


export default class PlayerSelection extends React.Component {
    render(){
        return(

                <ImageBackground source={require('../assets/iglou_motif.png')} style={styles.background_image}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent', 'rgba(0,0,0,0.4)']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: '60%',
                        height: '40%',
                    }}
                />
                <View style={styles.container}>
                    <StatusBar style="light" />

                </View>
            </ImageBackground>
        );
    }
}



const styles = StyleSheet.create({
    background_image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        paddingTop: '20%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});