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
          <Text style={{ color: '#fff' }}>Welcome, </Text>
          <Text style={{ color: '#fff', fontSize: 20 }}>Lê Xuân Tuyển</Text>
        </View>
      </View>
      <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>
      {/*Search bar section */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search" style={styles.TextInput} />
        <FontAwesome name="search" size={24} color="#877dfa" style={styles.searchBtn} />
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
  searchBarContainer:{
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  TextInput:{
    padding: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '85%',
  },
  searchBtn:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8
  },
});
