import React from 'react'
import {
    StyleSheet, Text, View, ImageBackground, Image
} from 'react-native';
import AVATARLIST from '../playerInfo/AvatarList'

function resolveImageFromID(id){
    let avatar = AVATARLIST.find(a => a.id == id);
    return avatar.image;
}


export default class Player extends React.Component{
    render(){
        const playerInfo = this.props.info
        var avatar = resolveImageFromID(playerInfo.id);
        return(
            <View style={styles.main_container}>
                <Image  style={styles.avatar}
                        source={avatar} />
                <Text>{playerInfo.name} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 25,
        marginLeft: 20,
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: 25,
        width: '85%'
    },
    avatar:{
        width: 70,
        resizeMode: 'contain',
        marginRight: 10
        
    }
});