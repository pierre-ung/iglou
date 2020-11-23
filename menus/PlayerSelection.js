import React, { useState } from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Image, FlatList, ScrollView
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
import { Overlay } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import PlayerConfig from '../playerInfo/Config.js'
import AVATARLIST from '../playerInfo/AvatarList.js';


export default class PlayerSelection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleOverlay: false,
            nameError: "",
            nameText: "",
        }
    }

    _updateNameText(username){
        console.log("here username = " + username)
        this.setState({nameText: username});
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
                PLAYERLIST.playerList.push({id: PLAYERLIST.id_cnt++, name: username, avatar_id: PLAYERLIST.id_cnt%AVATARLIST.nbAvatar})
                this._toggleOverlay()
                break;
            default:
                err = "Unknown error";
                break;
        }
        this.setState({nameError: err});
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
                            <FlatList
                                style={styles.player_style}
                                data={PLAYERLIST.playerList}
                                keyExtractor={(item) => (item.id).toString()}
                                renderItem={({ item }) => <Player info={item} />}
                            />
                            <View style={styles.add_pb}>
                                <AddPlayerButton onPress={() => this._toggleOverlay()} />
                            </View>

                            {/* ***************** Player creation overlay *************************** */}
                            <Overlay overlayStyle={styles.overlay}

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
                            </Overlay>

                            {/* ******************************************************************** */}
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
        alignItems: 'center',

    },
    player_style: {
        width: '80%',

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
        textAlign: 'center',
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: 0,
        fontSize: 24
    }

});
