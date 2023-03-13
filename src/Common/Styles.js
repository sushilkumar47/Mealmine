import {StyleSheet, Platform} from 'react-native';

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    top:"14%",
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
    
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  sendOtp: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#FF5B00',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  sendOtpButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  input: {
    height: 40,
    marginBottom: 9,
    marginTop:10,
    backgroundColor: "#fff",
    paddingTop:10,
    borderRadius:20 ,
    paddingHorizontal:20
    

    
  },
  last: {
    height: 40,
    marginBottom:20,
    marginTop:10,
    backgroundColor: "#fff",
    paddingTop:10,
    borderRadius:20 ,
    paddingHorizontal:20

    
  },
  
    area:{
    marginTop:200,
    marginLeft:20,
    marginRight:20,
    
   },
    bold:{
    fontSize:25,
    marginLeft:110,
    marginBottom:20,
    color:"rgb(239, 79, 95)",
    fontWeight:"900"

   },
   OtpLOginText:{
    fontSize:25,
    marginLeft:60,
    marginBottom:20,
    color:"rgb(239, 79, 95)",
    fontWeight:"900"

   },
    butan:{
      marginTop: 8,
      borderRadius: 60,
      height: 45,
      backgroundColor: '#fc8019',
      justifyContent: 'center',
      minWidth: 300,   

   },
   imageStyles:{
    width:300,
    height:300,
    borderRadius:400,
   },
   checkmenu:{
    marginTop: 8,
      borderRadius: 20,
      marginLeft:30,
      marginRight:30,
      marginTop:50,
      height: 60,
      shadowColor:'black',
      elevation: 1,
      backgroundColor: '#FAF9F6',
      justifyContent: 'center',
      minWidth: 200,

   },
   checkmenu2:{
      borderRadius: 20,
      marginLeft:30,
      marginRight:30,
      marginTop:20,
      height: 60,
      shadowColor:'black',
      elevation: 1,
      backgroundColor: '#FAF9F6',
      justifyContent: 'center',
      minWidth: 200, },
    backButton:{
      borderRadius: 90,
      marginLeft:10,
      marginRight:600,
      marginTop:64,
      height: 40,
      shadowColor:'black',
      elevation: 1,
      backgroundColor: '#7DF9FF',
      justifyContent: 'center',
      minWidth: 90, },

    checkmenuText:{
      textAlign: 'center',
      fontSize: 20,
      color: 'black',
      fontWeight: '700'
      }
});

export default styles;