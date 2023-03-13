/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Otp from './src/screens/Otp';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './src/screens/Onboarding';
import DoRegister from './src/screens/DoRegister';
import OtpLogin from  './src/screens/OtpLogin';
import ProfileMess from './src/screens/ProfileMess';
import Feedback from './src/screens/StarRating';

const Stack = createNativeStackNavigator();

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
           {/* <Stack.Screen
            options={{headerShown: false}}
            name="Feedback"
            component={Feedback}
          /> */}
           {/* <Stack.Screen
            options={{headerShown: false}}
            name="Onboarding"
            component={OnBoarding}
          /> */}
           {/* <Stack.Screen
            options={{headerShown: false}}
            name="DoRegister"
            component={DoRegister}
          /> */}
          
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
           <Stack.Screen
            options={{headerShown: false}}
            name="OtpLogin"
            component={OtpLogin}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="otp"
            component={Otp}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ProfileMess"
            component={ProfileMess}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
