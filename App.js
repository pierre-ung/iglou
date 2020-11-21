import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logo_area}>
        <Image  source={require("./assets/main_logo.png")} 
                style={styles.logo_style}/>
        <Text style={styles.app_name}>IGLOU</Text>
      </View>
      <View style={styles.nav_menu_area}>
        <TouchableOpacity
          //onPress
          style={styles.play_button}>
            <Text style={styles.text_play}>PLAY !</Text>
        </TouchableOpacity>
        <Text onPress={() => console.log("Text pressed !")}
              style={styles.tip_button}>
          Buy us a drink !
        </Text>
              
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_style: {
    flex: 5, 
    width : 200
  },
  logo_area: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    marginBottom: 75
  },
  app_name: {
    color: 'white',
    fontSize:30,
  },
  nav_menu_area:{
    flex: 1,
    width: "80%",
    borderRadius: 50,
    alignItems:"center"
  },
  play_button:{
    width: '100%',
    backgroundColor: '#FF4E47',
    height: '20%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  text_play: {
    color: 'white',
    fontSize: 24
  },
  tip_button: {
    color: 'white',
    fontSize: 24
  }
});
