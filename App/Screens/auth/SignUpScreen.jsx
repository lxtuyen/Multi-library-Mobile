import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'

import images from "../../assets/images";
import InputBox  from "../../Components/Form/InputBox";
import SubmitButton from "../../Components/Form/SubmitButton";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () =>{

  }

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
        <InputBox inputTitle={"Name"} placeholder='VD: tuyen123' value={name} setValue={setName} />
        <InputBox
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          placeholder='VD: email@domain.com'
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          placeholder='Nhập mật khẩu'
          value={password}
          setValue={setPassword}
        />
            <SubmitButton
        btnTitle="Register"
        loading={loading}
        handleSubmit={handleSubmit}
      />
        </View>
        <Text style={styles.orText}>
            Or
        </Text>
        <View style={styles.signinContainer}>
            <Text style={styles.signinText}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
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
    width: 35
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
  forgotPassword: {
    alignItems: "flex-end",
    display: "flex",
  },
  forgotPasswordText: {
    color: "rgb(55 65 81)",
    marginBottom: 20,
  },
  orText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "bold",
    color: "rgb(55 65 81)",
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  signinContainer: {
    flexDirection: "row",
    justifyContent: "center ",
    marginTop: 28,
    marginLeft: 35,
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