import React, { FC, ReactElement, useState } from "react";
import { Alert,Text, Button, StyleSheet, TextInput , SafeAreaView,email,ScrollView, View,TouchableOpacity} from "react-native";
import Parse from "parse/react-native";
import styles from "../Common/Styles";
import { useNavigation } from "@react-navigation/core";

export default function DoRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const doUserRegistration = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    // Since the signUp method returns a Promise, we need to call it using await
    return await Parse.User.signUp(usernameValue, passwordValue)
      .then((createdUser) => {
        // Parse.User.signUp returns the already created ParseUser object if successful
        Alert.alert(
          "Success!",
          `User ${createdUser.get("username")} was successfully created!`
        );
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  };

  return (
    <> 
      <SafeAreaView style={styles.area} >    
      <ScrollView>
      <View><Text style={styles.bold}>REGISTER</Text></View>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        // onChangeText={(e) => setEmail(e.target.value)}
        value={email}
        placeholder={"Email Address"}
      />
      <TextInput 
      style={styles.last}
      value={Number}
      placeholder={"phone Number"}
      />
      <TouchableOpacity style={styles.butan} onPress={()=> navigation.replace("Login")}>
      <Text style={styles.sendOtpButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    </>
  );
};
