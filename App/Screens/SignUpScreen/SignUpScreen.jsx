import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import images from "../../assets/images";
import icons from "../../assets/icons";

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <SafeAreaView style={styles.row}>
        <View tyle={styles.containerArrow}>
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                style={styles.TouchableOpacity}
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.containerImg}>
            <Image source={images.signup} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View style={styles.wrapForm}
      >
        <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                value="john snow"
                placeholder='Enter Name'
            />
            <Text style={styles.label}>Email Address</Text>
            <TextInput
                style={styles.input}
                value="john@gmail.com"
                placeholder='Enter Email'
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <TouchableOpacity
               style={styles.signUpButton}
            >
                <Text style={styles.signUpButtonText}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.orText}>
            Or
        </Text>
        <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
            <Image source={icons.google} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={icons.apple} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={icons.facebook} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.signinContainer}>
            <Text style={styles.signinText}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.signinButtonText}> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  wrap: {
    flex: 1 ,
    backgroundColor: "#877dfa",
  },
  row: {
    display: "flex",
  },
  containerArrow: {
    flexDirection: "row",
    justifyContent: "start",
  },
  TouchableOpacity: {
    backgroundColor: "#facc15",
    padding: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginLeft: 16,
  },
  containerImg: {
    flexDirection: "row",
    justifyContent: "center",
  },
  wrapForm: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgb(255 255 255)",
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
  },
  form: {
    padding: 16,
    marginTop: 8,
  },
  label: {
    color: "rgb(55 65 81)",
    marginLeft: 16,
  },
  input: {
    padding: 16,
    backgroundColor: "rgb(243 244 246)",
    color: "rgb(55 65 81)",
    borderRadius: 1,
    marginBottom: 12,
  },
  forgotPassword: {
    alignItems: "flex-end",
    display: "flex",
  },
  forgotPasswordText: {
    color: "rgb(55 65 81)",
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: "rgb(250 204 21)",
    borderRadius: 5,
    paddingBottom: 12,
    paddingTop: 12,
  },
  signUpButtonText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(55 65 81)",
  },
  orText: {
    fontSize: 1.25,
    lineHeight: 28,
    fontWeight: "bold",
    color: "rgb(55 65 81)",
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 40,
  },
  socialButton: {
    padding: 8,
    backgroundColor: "#rgb(243 244 246);", 
    borderRadius: 1,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  signinContainer: {
    flexDirection: "row",
    justifyContent: "center ",
    marginTop: 28
  },
  signinText: {
    color: "rgb(107 114 128)",
    fontWeight: 'bold'
  },
  signinButtonText: {
    color: "rgb(234 179 8)",
    fontWeight: 'bold'
  },
})