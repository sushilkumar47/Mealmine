import React from 'react'
import { ScrollView, View,Image,Text,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../Common/Styles'
import { useNavigation } from "@react-navigation/core";



export default function ProfileMess() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor:"black",height:200,}}>
          
        </View>
        <Image style={{height:160,width:160,borderRadius:200,marginLeft:100,marginTop:-80 }} source={require('../resources/paratha.jpg')} />
        <Text style={{marginLeft:90,marginTop:10 ,fontSize:20,fontWeight:"900",color:"black"}}>Sunshine Food Cart</Text>
        <Text style={{marginLeft:130,marginTop:0 ,fontSize:15,fontWeight:"bold"}}>Veg/Nonveg</Text>
        <View>
        <TouchableOpacity  style={styles.checkmenu}>
        <Text style={styles.checkmenuText}>Check Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkmenu2}>
        <Text style={styles.checkmenuText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.checkmenu2}>
        <Text style={styles.checkmenuText}>Feedback</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.checkmenuText} onPress={()=> navigation.replace("Login")}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
