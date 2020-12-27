import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-deck-swiper';
import Button from '../components/CustomButton.js'
import PLAYERLIST from '../playerInfo/PlayerList.js'
import * as deck from '../deckGeneration/Generator.js'

export default class MainMenu extends React.Component {


    //TODO : renderCardFunction
    renderCard = (card) => { return (<View style={styles.card}><Text>{card.getDifficulty()}</Text></View>); }
    cards = deck.generateSimpleGame(50, 10);
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
                    <View style={styles.swiper_container}>
                        <StatusBar style="light" />
                        <Swiper
                            ref={swiper => {
                                this.swiper = swiper
                            }}
                            cards={this.cards}
                            renderCard={this.renderCard}
                            stackSize={5}
                            stackSeparation={0}
                            disableBottomSwipe={true}
                            disableTopSwipe={true}
                            backgroundColor='transparent'
                        >

                        </Swiper>
                    </View>

                    <View style={styles.swipe_buttons}>
                        <Button onPress={() => this.swiper.swipeLeft()} text='<-' color='green' />
                        <Button onPress={() => this.swiper.swipeRight()} text='->' color='red' />
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
        flex: 1,
    },
    swiper_container: {
        paddingTop: '20%',
        flex: 0.75,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 0.60,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    swipe_buttons: {
        alignContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '25%'
    },

});
