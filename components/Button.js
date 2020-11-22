import React from 'react'
import {
  View, Text, TouchableOpacity,
}from 'react-native'

function actionNulle(){
  console.log("Default Action")
}

/* Usage du composant :
  import Button from "./components/Button.js"
  <Button
    color='#ff4e47'
    text="Play!"
    onPress={ () => console.log("ACTION CUSTOM") //Fonction }
    />
*/

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          color: props.color,
          disabled: false,
          text: props.text,
        }
        this.HandleClick = this.HandleClick.bind(this)
    }

    //Switch l'état disabled
    switch(){
      this.setState(prevState => {
        console.log(prevState.disabled)
        return {disabled : !prevState.disabled}
        }
      )
    }

    //Action lors du click
    HandleClick() {
        //this.switch()
        if (this.props.onPress != null){
          return this.props.onPress
        }else{
          return (
            ()=>console.log(`Bouton "${this.state.text}" cliqué`)
          )
        }
    }

    componentDidMount(){
      if(this.props.onPress == null){
        console.log("Pas d'action définie")
      }
    }

    render() {
        return (
          <TouchableOpacity
            style={
              {
                width: '100%',
                backgroundColor: this.state.color != null && this.state.disabled ? "#111" : this.state.color,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }
            }
            onPress={this.HandleClick()}
            >
              <Text style={{
                color: this.state.disabled ? '#555':'white',
                fontSize: 24,
              }}>{this.state.text}</Text>
          </TouchableOpacity>
        )
    }
}

export default Button
