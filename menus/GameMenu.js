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
    renderCard = (card) => { return (<View style={styles.card}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ultricies tempus. Aenean semper, ipsum quis imperdiet tristique, metus libero egestas odio, pharetra consequat eros est vitae odio. Nulla sollicitudin arcu commodo congue dignissim.{"\n"}
    {"\n"}
    Diff:{card.getDifficulty()}</Text></View>); }
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
                    <Image source={require("../assets/logo_light_inline.png")} style={styles.logo}/>
                    <View style={styles.swiper_container}>
                        <Swiper
                            ref={swiper => {
                                this.swiper = swiper
                            }}
                            cards={this.cards}
                            renderCard={this.renderCard}
                            stackSize={3}
                            stackSeparation={12}
                            disableBottomSwipe={true}
                            disableTopSwipe={true}
                            backgroundColor='transparent'
                        />
                    </View>
                </View>

            </ImageBackground>
        );
    }
}
// <View style={styles.swipe_buttons}>
//     <Button onPress={() => this.swiper.swipeLeft()} text='X' color='red' bR={100} />
//     <Button onPress={() => this.swiper.swipeRight()} text='v' color='green'  bR={100}/>
// </View>


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
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: '80%',
        padding: '7%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        backgroundColor: 'white'
    },
    swipe_buttons: {
        flex: 0.2,
        paddingBottom: '10%',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '25%'
    },
    logo :{
      height: 50,
      alignSelf: "center",
      resizeMode: 'contain',
    }

});
