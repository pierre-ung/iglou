import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
//Components homemade
import LogoArea from './components/LogoArea.js'
import Button from './components/Button.js'

export default function App() {
  return (
    <ImageBackground source={require('./assets/iglou_motif.png')} style={styles.background_image}>
    <View style={styles.container}>
      <StatusBar style="light" />
      <LogoArea />
      <View style={styles.nav_menu_area}>
        <Button color='#ff4e47' text="Play!" onPress={() => console.log("ACTION CUSTOM")}/>
        <Button text="Buy us a drink !"/>
      </View>

    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background_image:{
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
  nav_menu_area:{
    paddingTop: '5%',
    flex: 1,
    width: "80%",
    borderRadius: 50,
    alignItems:"center"
  },
  tip_button: {
    color: 'white',
    fontSize: 24
  }
});
