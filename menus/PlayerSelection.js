import React, { useState } from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Image, FlatList, ScrollView, KeyboardAvoidingView,Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
//Components homemade
import LogoArea from '../components/LogoArea.js'
import Button from '../components/Button.js'
import { Component } from 'react';
import PLAYERLIST from '../playerInfo/PlayerList'
import Player from '../components/Player.js';
import AddPlayerButton from '../components/AddPlayerButton.js'
import { Icon, Overlay } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import PlayerConfig from '../playerInfo/Config.js'
import AVATARLIST from '../playerInfo/AvatarList.js';
import KeyboardAccs from '../components/KeyboardAccs.js'
import { SafeAreaView } from 'react-native-safe-area-context';

import PlayerInputButton from '../components/PlayerInputButton.js'

const minPlayer = 3

export default class PlayerSelection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleOverlay: false,
            nameError: "",
            nameText: "",
            playerList: PLAYERLIST.playerList
        }
    }

    _updateNameText(username) {
        console.log("here username = " + username)
        this.setState({ nameText: username });
    }

    _toggleOverlay() {
        this.setState({
            visibleOverlay: !this.state.visibleOverlay,
            nameError: ""
        });
    }

    _checkUsername(username) {
        let tmp = ((PLAYERLIST.playerList.find(a => a.name === username)));
        // Username already taken
        if (tmp != null) {
            return PlayerConfig.NAME_ALREADY_USED_ECODE;
        }
        if (username.length < PlayerConfig.pseudo_minlength) {
            return PlayerConfig.NAME_LENGTH_ECODE;
        }
        return PlayerConfig.NAME_OK;
    }

    _addPlayer(username) {
        var err = "";
        switch (this._checkUsername(username)) {
            case PlayerConfig.NAME_ALREADY_USED_ECODE:
                err = PlayerConfig.NAME_ALREADY_USED_ETEXT;
                break;
            case PlayerConfig.NAME_LENGTH_ECODE:
                err = PlayerConfig.NAME_LENGTH_ETEXT;
                break;
            case PlayerConfig.NAME_OK:
                PLAYERLIST.playerList.unshift({ id: PLAYERLIST.id_cnt++, name: username, avatar_id: PLAYERLIST.id_cnt % AVATARLIST.nbAvatar })
                this._toggleOverlay()
                break;
            default:
                err = "Unknown error";
                break;
        }
        this.textInput.clear();
        this.setState({ nameError: err });
    }

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
                        <Text style={styles.title}>Build Your Party!</Text>
                            <FlatList
                                inverted={true}
                                style={styles.player_style}
                                data={this.state.playerList}
                                extraData={this.state}
                                keyExtractor={(item) => (item.id).toString()}
                                renderItem={({ item }) => <Player info={item} flist={this}/>}/>







                            {/* ***************** Player creation overlay *************************** */}

                            { /* <Overlay overlayStyle={styles.overlay}

                                isVisible={this.state.visibleOverlay}
                                onBackdropPress={() => this._toggleOverlay()}>
                                <View style={styles.create_player}>
                                    <TextInput style={styles.input_name}
                                        placeholder="Player name"
                                        maxLength={PlayerConfig.pseudo_maxlength}
                                        onChangeText={(text) => this._updateNameText(text)}
                                    />
                                    <View style={{ width: '80%' }}>
                                        <Text style={{fontSize:10, color:'red'}}>{this.state.nameError}</Text>
                                        <Button onPress={() => this._addPlayer(this.state.nameText)} color="#ff4e47" text="Add" height={50} />

                                    </View>
                                </View>
                            </Overlay> */}

                            {/* ******************************************************************** */}
                        </View>
                    </View>
                        <KeyboardAccs bottom={0} verticalOffset={0}>
                        <View style={styles.playerInput}>
                            <PlayerInputButton icon="md-settings" color="#ccc" iconColor="#404040"/>
                            <TextInput
                                ref={input => { this.textInput = input }}
                                style={styles.playerTextField}
                                onChangeText={(text) => this._updateNameText(text)}
                                autoFocus={true}
                                onSubmitEditing={() =>this._addPlayer(this.state.nameText)}
                                blurOnSubmit={false}
                                placeholder='Enter player name' />
                              <PlayerInputButton icon="plus" color="#ccc" iconColor="#404040" onPress={() => this._addPlayer(this.state.nameText)}/>
                            <PlayerInputButton icon="arrow-right" color={PLAYERLIST.playerList.length>=minPlayer ? '#ff4E47' : '#EBADAA'} iconColor="#fff"/>

                        </View>
                    </KeyboardAccs>


                </View>

            </ImageBackground >
        );
    }
}



const styles = StyleSheet.create({
    background_image: {
        margin: -1,
        resizeMode: "cover",
    },
    container: {
        paddingTop: '10%',
        alignItems: 'center'
    },
    main_container: {
        display: 'flex',
        alignItems: 'stretch',
    },
    logo_area: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_style: {
        width: 200,
        resizeMode: 'contain',
    },
    game_area: {
        flex: 5,
        width: 0.9*Dimensions.get('window').width,
        backgroundColor: '#fefefe',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        paddingTop: '3%'

    },
    player_style: {
        width: '90%',
        marginBottom: 60,
    },
    add_pb: {
        flex: 3,
    },
    overlay: {
        backgroundColor: "#303030",
        width: '80%',
        height: 150,
        paddingBottom: 50,
        borderRadius: 20
    },
    create_player: {
        alignItems: 'center'
    },
    input_name: {
        height: '50%',
        width: '100%',
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        fontSize: 24
    },
    playerInput:{
      display:'flex',
      paddingRight: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
    },
    playerTextField:{
       flex: 1,
       fontSize: 18,
       marginRight: 5,
       marginLeft: 5,
    },
    title:{
      width: '100%',
      fontSize: 24,
      fontWeight: "bold",
      color: "#ff4e47",
      marginTop: 5,
      marginBottom: 10,
      textAlign: "center"
    }

});
