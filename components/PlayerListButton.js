import React from 'react'
import {
  TouchableOpacity,StyleSheet
}from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


const styles = StyleSheet.create({
  box:{
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: -8,
  }
})

export default class PlayerListButton extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    //Fonction Pour supprimer le joueur
  }

  render(){
    return(
      <TouchableOpacity style={styles.box} onPress={this.props.delAction}>
        <FontAwesome name="close" size={20} color="rgba(0,0,0,0.8)" />
      </TouchableOpacity>
    )
  }
}
