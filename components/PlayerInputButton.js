import React from 'react'
import{
  TouchableOpacity
}from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class PlayerInputButton extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity style={{
        width: 35,
        height: 35,
        borderRadius: 8,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: this.props.color,
      }} onPress={this.props.onPress}>
      {this.props.icon == 'md-settings' ?
      <Ionicons name="md-settings" size={20} color={this.props.iconColor ? this.props.iconColor : "rgba(0,0,0,0.8)"} />
      : <FontAwesome name={this.props.icon} size={20} color={this.props.iconColor ? this.props.iconColor : "rgba(0,0,0,0.8)"} />}
      </TouchableOpacity>
    )
  }
}
