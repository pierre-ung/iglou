import React from 'react'
import {
  TouchableOpacity,StyleSheet
}from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  box:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '6%',
    paddingTop: '2%'
  }
})

export default class PlayerListButton extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity style={{
          width: this.props.size,
          height: this.props.size,
          borderRadius: this.props.size/2,
          marginLeft: this.props.size/10,
          marginRight: this.props.size/10,
          backgroundColor: this.props.color,
          ...styles.box
        }}
          onPress={this.props.onPress}>
        <FontAwesome name="chevron-right" size={70} color="rgba(256,256,256,0.9)" />
      </TouchableOpacity>
    )
  }
}
