import React from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Image, FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
//Components homemade
import LogoArea from '../components/LogoArea.js'
import Button from '../components/Button.js'
import { Component } from 'react';
import PLAYERLIST from '../playerInfo/PlayerList'
import Player from '../components/Player.js';



export default class PlayerSelection extends React.Component {
    render() {
        return (

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


                    {/* top logo + white area */}
                    <View style={styles.main_container}>
                        <View style={styles.logo_area}>
                            <Image source={require("../assets/logo_light_inline.png")}
                                style={styles.logo_style} />
                        </View>
                        {/* white area */}
                        <View style={styles.game_area}>
                            <FlatList
                                data={PLAYERLIST}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <Player  info={item}/>}
                            />
                        </View>
                    </View>
                </View>

            </ImageBackground >
        );
    }
}



const styles = StyleSheet.create({
    background_image: {
        margin: -1,
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
    main_container: {
        flex: 10,
        alignItems: 'center'
    },
    logo_area: {
        flex: 1,
    },
    logo_style: {
        flex: 1,
        width: 200,
        resizeMode: 'contain',
    },
    game_area: {
        marginTop: 20,
        flex: 7,
        backgroundColor: '#ffffff',
        width: 300,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    }
});
