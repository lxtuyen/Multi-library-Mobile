import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import React from "react";
import images from "../../assets/images";
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
        {/*Profile bar section */}
        <View style={styles.profileMainContainer}>
      <View style={styles.profileContainer}>
        <Image source={images.login} style={styles.userImages} />
        <View>
          <Text style={{ color: white }}>Welcome, </Text>
          <Text style={{ color: white, fontSize: 20 }}>Lê Xuân Tuyển</Text>
        </View>
      </View>
      <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>
      {/*Search bar section */}
      <View>
        <TextInput placeholder="Search" style={styles.TextInput} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#877dfa",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImages: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  TextInput:{
    padding: 6,
    
  },
});
