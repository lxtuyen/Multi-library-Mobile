import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

import images from "../../assets/images";
import InputBox  from "../../Components/Form/InputBox";
import ButtonComponent from '../../Components/ButtonComponent';

const SignInScreen = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigation = useNavigation();

  return (
    <View style={styles.wrap}>
      <SafeAreaView style={styles.row}>
        <View style={styles.containerArrow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.TouchableOpacity}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerImg}>
          <Image source={images.login} style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View style={styles.wrapForm}>
        <View style={styles.form}>
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
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>      
          <ButtonComponent
            text1 = {"Login"}
          />
        </View>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupButtonText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

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
  loginButton: {
    backgroundColor: "rgb(250 204 21)",
    borderRadius: 5,
    paddingBottom: 12,
    paddingTop: 12,
  },
  loginButtonText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(55 65 81)",
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
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center ",
    marginLeft: 35,
  },
  signupText: {
    color: "rgb(107 114 128)",
    fontWeight: 'bold',
  },
  signupButtonText: {
    color: "rgb(234 179 8)",
    fontWeight: 'bold'
  },
});

