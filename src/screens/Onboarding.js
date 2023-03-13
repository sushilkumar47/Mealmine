import React from 'react'
import { Text, Image, StyleSheet,TouchableOpacity, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import { useRef } from 'react'
import { useNavigation } from "@react-navigation/core";
import styles from '../Common/Styles';


export default function OnBoarding() {
     const navigation = useNavigation();
    const onboardingRef = useRef<Onboarding>(null);
    
    const Done = ({...props}) => (
      <TouchableOpacity
      {...props}
      >
      <Text style={{fontSize:16, marginHorizontal:20}}>Done</Text>
      </TouchableOpacity>
  )
  const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? '#AFE1AF' : '#EB9B65CB'
    return (
    <View
    style={{
        width:24,
        height:6,
        borderRadius:4,
        marginHorizontal:3,
        backgroundColor
    }}
    />
    )
}

  return (
    <>
    <Onboarding 
    DoneButtonComponent={Done}
    DotComponent={Dots}
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.replace("Login")}
   
  pages={[
    {

      backgroundColor: '#FFFFFF',
      image: <Image style={styles.imageStyles} source={require('../resources/thali.jpg')} />,
      title: 'good food',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {

      backgroundColor: '#FFFFFF',
      image: <Image style={styles.imageStyles} source={require('../resources/paratha.jpg')} />,
      title: 'quality food',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {

      backgroundColor: '#FFFFFF',
      image: <Image style={styles.imageStyles} source={require('../resources/surmai.jpg')} />,
      title: 'love and joy',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    ]}
    

   />
    </>
  )
}
