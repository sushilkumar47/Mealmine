import React, { FC, ReactElement, useState } from "react";
import { MESSAGE,showMessage,Text,TextInput , SafeAreaView,ScrollView, View,TouchableOpacity} from "react-native";
import styles from "../Common/Styles";
import { useNavigation } from "@react-navigation/core";
import { Value } from "react-native-reanimated";

export default function DoRegister() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidError, setEmailValidError] = useState('');
  const [passwordError,passwordErrorMessage] = useState("")
  const [putName, setPutName]= useState("")
  const [PutPhone, setPutPhone]= useState("")
  const [PutPass, setPutPass]= useState("")
  const [putEmail, setPutEmail]= useState("")
  const [putValue, setPutValue]= useState("")

  const navigation = useNavigation();

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
    if (reg.test(val) === false) {
      setEmailValidError('Enter Valid Email Address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
    };
  const handleValidPass = (value) => {
  if (value.length > 10 || value.length < 5) {
      // this.setState({ passwordErrorMessage: "Password should be min 8 char and max 20 char"});
      passwordErrorMessage('Password should be min 8 and max 20');
  }
 else if (value.length < 10 ||  value.length > 5){
      passwordErrorMessage(" ")}
   
    };

  const checkValidation = () => {
     if ( name.length==""){
      setPutName("Name Cannot be Empty!")
     }
     else {
      setPutName("")
     }

     if ( password.length==""){
      setPutPass("Password Cannot be Empty!")
     }
     else 
     {
      setPutPass("") 
     } 
     if ( email.length==""){
      setPutEmail("Email Cannot be Empty!")
     }
     else {
      setPutEmail("") 
     }
     if ( phone.length==""){
      setPutPhone("Phone Number Cannot be Empty!")
     }
     else{
      setPutPhone("")
     }
     if (phone!="" && name.length!="" && email.length!="" && password.length!="")
     navigation.replace("Login")
  }
  
  return (
    <> 
      <SafeAreaView style={styles.area} >  
       <ScrollView>
      <View><Text style={styles.bold}>REGISTER</Text></View>
      <TextInput
        style={styles.input}
        value={name}
        placeholder={"Name*"}
        onChangeText={(user) =>{setname(user); setPutName("")}}
        autoCapitalize={"none"}
      />
      <Text style={{color:'red'}}> {putName}</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password*"}
        
        onChangeText={value=> {
        setPutPass("")
        setPassword(value);
        handleValidPass(value);}}
      />
      {passwordError ? <Text style={{color:"red",marginLeft:8}}>{passwordError}</Text> : null}
      <Text style={{color:'red'}}> {PutPass}</Text>
      <TextInput
        style={styles.input}
        onChangeText={value=> {
          setEmail(value);
          handleValidEmail(value);
          setPutEmail("");}}
        value={email}
        keyboardType="email-address"
        placeholder={"Email Address*"}
      />
      {emailValidError ? <Text style={{color:"red",marginLeft:8}}>{emailValidError}</Text> : null}
      <Text style={{color:'red'}}> {putEmail}</Text>
      <TextInput 
      style={styles.input}
      value={phone}
      keyboardType="numeric"
      placeholder={"phone Number*"}
      maxLength={10}
      onChangeText={(phone) =>{ setphone(phone); setPutPhone("")}}
      />
     <Text style={{color:'red'}}> {PutPhone}</Text>
      <TouchableOpacity  
      onPress={()=> { checkValidation()}} 
      style={styles.butan}>
      <Text style={styles.sendOtpButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      </ScrollView>      
      </SafeAreaView>
    </>
  );
};
