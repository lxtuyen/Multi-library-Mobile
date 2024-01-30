import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import images from "../../assets/images";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.wrap}>
        <View style={styles.container}>
            <Text 
                style={styles.welcomeText}>
                Welcome to Multi-Library
            </Text>
            <View style={styles.container}>
                <Image source={images.welcome}
                    style={{width: 350, height: 350}} />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    style={styles.SignUpButton}>
                        <Text 
                            style={styles.SignUpText}
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View style={styles.containerText}>
                    <Text style={styles.askText}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
                        <Text style={styles.loginText}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  wrap: {
    flex: 1 ,
    backgroundColor: "#877dfa",
  },
  container:{
    flex: 1 ,
    display: "flex",
    jusfifyContent: 'around',
    marginTop: 16,
    marginBottom: 16,  
  },
  welcomeText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 40,
    textAlign: 'center',
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerButton: {
    marginTop: 16,
  },
  SignUpButton:{
    paddingTop: 12,
    paddingBottom: 12, 
    backgroundColor: 'rgb(250 204 21)',
    marginLeft: 28,
    marginRight: 28,
    borderRadius: 12,
  },
  SignUpText:{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(55 65 81)",
  },
  askText:{
    fontWeight: 'semibold',
    color: 'white',
  },
  loginText:{
    fontWeight: 'semibold',
    color: 'rgb(250 204 21)',
  }
})