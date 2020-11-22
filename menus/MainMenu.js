import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
//Components homemade
import LogoArea from '../components/LogoArea.js';
import Button from '../components/Button.js';
export default class MainMenu extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation
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
                    <LogoArea />
                    <View style={styles.nav_menu_area}>
                        <Button color='#ff4e47' text="Play!" onPress={() => navigate('PlayerSelect')}/>
                        <Button text="Buy us a drink !" />
                    </View>

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
    nav_menu_area: {
        paddingTop: '5%',
        flex: 1,
        width: "80%",
        borderRadius: 50,
        alignItems: "center"
    },
});