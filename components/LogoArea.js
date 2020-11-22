import React from "react"
import {StyleSheet, View, Image, Text} from "react-native"

function LogoArea(){
  return(
    <View style={styles.logo_area}>
      <Image  source={require("../assets/logo_iglou.png")}
              style={styles.logo_style}/>
    </View>
)}

const styles = StyleSheet.create({
  logo_style: {
    flex: 1,
    width:300,
    resizeMode: 'contain',
  },
  logo_area: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    marginBottom: 75
  },
  app_name: {
    flex: 1,
    color: 'white',
    fontSize:30,
  },
})

export default LogoArea
