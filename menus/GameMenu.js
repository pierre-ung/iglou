import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-deck-swiper';
import Button from '../components/SwipeButton.js'
import Button2 from '../components/SwipeButton0.js'
import PLAYERLIST from '../playerInfo/PlayerList.js'
import * as deck from '../deckGeneration/Generator.js'
import types from '../deckGeneration/CardTypes.js'
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_500Medium,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic
} from '@expo-google-fonts/noto-sans'

export default class MainMenu extends React.Component {

    ///////////////////////////////// RENDER CARD (Set each card style) ///////////////////////////////
    renderCard = (card) => {
        var currentStyle = {
            card: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                height: '70%',
                padding: '7%',
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#E8E8E8',
                backgroundColor: 'white',
            },
            copy: {
              fontSize: 24,
              textAlign: 'center'
            }
        };
        switch (card.getType()) {
            case types.NORMAL:
                currentStyle.card.backgroundColor = '#fafafa';
                currentStyle.card.borderColor = '#cfcfcf';
                currentStyle.copy.color = '#2a2a2a';
                break;
            case types.TRUTH_OR_DARE:
                currentStyle.card.backgroundColor = 'hsl(346, 88%, 58%)';
                currentStyle.card.borderColor = 'hsl(346, 88%, 50%)';
                break;
            case types.I_NEVER:
                currentStyle.card.backgroundColor = 'hsl(164, 96%, 41%)';
                currentStyle.card.borderColor = 'hsl(164, 96%, 26%)';
                currentStyle.copy.color = '#efefef';
                break;
            case types.TOUR:
                currentStyle.card.backgroundColor = 'hsl(195, 87%, 46%)';
                currentStyle.card.borderColor = 'hsl(195, 87%, 30%)';
                currentStyle.copy.color = '#efefef';
                break;
            case types.PERSO:
                currentStyle.card.backgroundColor = 'hsl(42, 100%, 67%)';
                currentStyle.card.borderColor = 'hsl(42, 100%, 50%)';
                currentStyle.copy.color = '#2f2f2f';
                break;

            default:
                break;
        }
        return (<View style={currentStyle.card}><Text style={currentStyle.copy}>{card.getTextFR()}{"\n"}</Text></View>);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    //generate deck
    cards = deck.generateSimpleGame(50, 20);

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
                <View style={styles.main_container}>
                    <Image source={require("../assets/logo_light_inline.png")} style={styles.logo} />
                    <View style={styles.swiper_container}>
                        <Swiper
                            ref={swiper => {
                                this.swiper = swiper
                            }}
                            cards={this.cards}
                            renderCard={this.renderCard}
                            stackSize={3}
                            stackSeparation={8}
                            disableBottomSwipe={true}
                            disableTopSwipe={true}
                            backgroundColor='transparent'
                            marginTop={-20}
                            marginBottom={20}
                            onSwipedAll={() => {navigate('MainMenu')}}
                        />
                    </View>

                    <View style={styles.swipe_buttons}>
                        <Button onPress={() => this.swiper.swipeLeft()} color='hsl(354, 77%, 55%)' size={100}/>
                        <Button2 onPress={() => this.swiper.swipeRight()} color='hsl(164, 100%, 40%)' size={100}/>
                    </View>
                </View>

            </ImageBackground>
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
    main_container: {
        paddingTop: '20%',
        display: 'flex',
        flex: 1,
    },
    swiper_container: {
        display: 'flex',
        zIndex: 1,
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    swipe_buttons: {
        flex: 0.2,
        paddingBottom: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: "35%"
    },
    logo: {
        height: 50,
        alignSelf: "center",
        resizeMode: 'contain',
    },

});
