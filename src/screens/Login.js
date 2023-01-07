import React, { FC, ReactElement, useState } from "react";
import { Alert,Text, Button, StyleSheet, TextInput , SafeAreaView,email,ScrollView, View,TouchableOpacity} from "react-native";
// import Parse from "parse/react-native";
import styles from "../Common/Styles";
import { useNavigation } from "@react-navigation/core";
import { color, interpolate } from "react-native-reanimated";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[PutUsername,setPutUser]=useState("");
  const[PutUserPass,setPutUserPass]=useState("");
  const navigation = useNavigation();

  const checkvalidate = () => {
      if(username==""){
        setPutUser("Enter Your Username or Email")
      }
      else{
        setPutUser("")
      }
      if(password==""){
        setPutUserPass("Enter Your Username or Email")
      }
      else{
        setPutUserPass("")
      }
      if(username!="" && password!=""){
        navigation.replace("Login")
      }
  }

  // const doUserRegistration = async function () {
  //   // Note that these values come from state variables that we've declared before
  //   const usernameValue = username;
  //   const passwordValue = password;
  //   // Since the signUp method returns a Promise, we need to call it using await
  //   return await Parse.User.signUp(usernameValue, passwordValue)
  //     .then((createdUser) => {
  //       // Parse.User.signUp returns the already created ParseUser object if successful
  //       Alert.alert(
  //         "Success!",
  //         `User ${createdUser.get("username")} was successfully created!`
  //       );
  //       return true;
  //     })
  //     .catch((error) => {
  //       // signUp can fail if any parameter is blank or failed an uniqueness check on the server
  //       Alert.alert("Error!", error.message);
  //       return false;
  //     });
  // };
  

  return (
    <> 
      <SafeAreaView  >    
      <ScrollView>
      <View style={styles.area}>
        <Text style={styles.bold}>LOGIN</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={value => {setUsername(value); setPutUser("");}}
        autoCapitalize={"none"}
      />
      <Text style={{color:"red" , marginLeft:14}}>{PutUsername}</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={value => {setPassword(value); setPutUserPass("")}}/>
        <Text style={{color:"red" , marginLeft:14}}>{PutUserPass}</Text>
      
      <TouchableOpacity style={styles.butan} 
      // onPress={()=> navigation.replace("Login")
      onPress={()=>{checkvalidate()}}>
      <Text style={styles.sendOtpButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{left:170,marginTop:7}} onPress={()=> navigation.replace("DoRegister")}>
      <Text style={{color:'blue'}}>New User ? Sign Up!</Text>
      
      </TouchableOpacity>
     
      <Text style={{color:'blue',alignSelf:'center',marginTop:7}}>--------------------- OR ----------------------</Text>
      

      
      <TouchableOpacity style={styles.butan} onPress={()=> navigation.replace("OtpLogin")}>
      <Text style={{textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '900',}}>LOGIN WITH OTP</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
    </>
  );
};
