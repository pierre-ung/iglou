import React from 'react'
import {
    StyleSheet, Text, View, ImageBackground, Image
} from 'react-native';
import AVATARLIST from '../playerInfo/AvatarList'
import PLAYERLIST from '../playerInfo/PlayerList'
import PlayerListButton from './PlayerListButton.js'

function resolveImageFromID(id){
    let avatar = AVATARLIST.avatarList.find(a => a.id == id);
    return avatar.image;
}


export default class Player extends React.Component{
    constructor(){
      super()
    }

    remove(id){
      const flist = this.props.flist;
      var toDelIndex = PLAYERLIST.playerList.findIndex(x => x.id == id);
      // id found
      if(toDelIndex != -1)
        PLAYERLIST.playerList.splice(toDelIndex, 1);

      flist.setState({playerList: PLAYERLIST.playerList});
    }

    render(){
        const playerInfo = this.props.info
        var avatar = resolveImageFromID(playerInfo.avatar_id);
        return(
          <View style={styles.listItem}>
            <Image  style={styles.avatar}
              source={avatar} />
            <View style={styles.text_container}>
              <Text style={styles.player_name}>{playerInfo.name} </Text>
              <PlayerListButton delAction={() => this.remove(playerInfo.id)}/>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 50,
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
    },
    avatar:{
        zIndex: 5,
        width: 60,
        resizeMode: 'contain',
    },
    player_name:{
        fontSize: 16,
        marginRight: 'auto',
        color: "#555"
    },
    text_container:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 1,
      height: 35,
      marginLeft: -30,
      paddingLeft: 35,
      paddingRight: 10,
      width: '100%',
      backgroundColor: '#f0f0f0',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 15,
    },
    removeButton:{
      marginLeft: 'auto',
      marginRight: 15,
      alignSelf: 'center'
    }
});
