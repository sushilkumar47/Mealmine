import React, { useState,useEffect }  from 'react'
import PhoneInput from "react-native-phone-number-input";
import { Text,View,TouchableOpacity,BackHandler,Alert } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView,ScrollView,SafeAreaView } from 'react-native';
// import styles from '../Common/Styles';
import styles, {
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,
  } from '../Common/Styles';
  
export default function OtpLogin() {

    const navigation = useNavigation();
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    constructor(){
      super();           
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

 componentWillMount() {
     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
 }

 componentWillUnmount() {
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
 }

 handleBackButtonClick() {
     //this.props.navigation.goBack(null);
     BackHandler.exitApp();
     return true;
 }

 handleBackButtonClick() {
     return true;   // when back button don't need to go back 
 }

       
    function handleBackButtonClick() {
      navigation.goBack();
      return true;
    }
  
    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
      };
    }, []);
  return (
   <>
   <SafeAreaView>
   <View style={{alignSelf:'center',top:350,position:'absolute'}}>
  <KeyboardAvoidingView enabled behavior='height'>
    <ScrollView>
      <Text style={styles.OtpLOginText} >Login With OTP</Text>
    <PhoneInput
          containerStyle={{width:300,borderRadius:10,alignSelf: 'center',marginBottom:20 , marginTop: 30,height:62 }}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          onChangeText={(text) => {            
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          disableArrowIcon={true}
          textContainerStyle={{borderRadius:10,backgroundColor:"#ffffff",paddingTop:0,height:62}}
          codeTextStyle={{height:50,marginLeft:-10,marginTop:18,textAlignVertical:"center",fontSize:16,fontFamily:"Avenir",color:"#000000"}}
          textInputProps={{maxLength:10}}
          textInputStyle={{width:70,height:50,textAlignVertical:"center",marginTop:19,fontFamily:"Avenir",color:"#000000",fontSize:16}}
          countryPickerProps={{ visible:false, countryCodes:["IN"], withAlphaFilter: true  }}
          countryPickerButtonStyle={{marginLeft:20,height:28,marginTop:16,textAlignVertical:"center",width:30}}
          withShadow
          autoFocus
        />
        <TouchableOpacity style={styles.butan} onPress={()=> navigation.replace("ProfileMess")}>
        <Text style={styles.sendOtpButtonText}>SEND OTP</Text>
      </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
          </View>
          </SafeAreaView>
   </>
  )
}
