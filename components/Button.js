import React from 'react'
import {
  View, Text, TouchableOpacity,Linking
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
    /!\ Si aucune action n'est définie (url ou onPress) => Log :
    Pas d'action définie pour le Bouton "${this.props.text}"
    //onClick
    Le Bouton "${this.props.text}" n'a pas d'action définie
     ${this.state.text}.disabled set to ${!prevState.disabled}
*/

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          color: props.color,
          disabled: false,
          text: props.text,
          onPress: this.props.onPress,
        }
        this.HandleClick = this.HandleClick.bind(this)
    }

    componentDidMount(){
      if(!this.state.onPress && !this.props.url){
        console.log(`Pas d'action définie pour le Bouton "${this.props.text}"` )
      }
    }

    //Action lors du click
    HandleClick() {
      //this.switch()
      if (this.state.onPress){
        return this.state.onPress
      }else if (this.props.url){
        return (
          ()=>{
            this.openUrl();
          }
        )
      }else{
        return () => {
          this.switchState()}
      }
    }

    //Switch l'état disabled
    switchState(){
      this.setState(prevState => {
        if(!prevState.disabled){
          console.log(`Le Bouton "${this.props.text}" n'a pas d'action définie
           ${this.state.text}.disabled set to ${!prevState.disabled}`)
        }
        return {disabled : !prevState.disabled}
        }
      )
    }

    openUrl(){
      Linking.openURL(this.props.url)
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
