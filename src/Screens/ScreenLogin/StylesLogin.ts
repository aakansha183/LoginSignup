import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#FAFOE6'
  },
  LoginInput: {
    backgroundColor: ' #FFFFFF',
    marginTop: 30,
    borderRadius: 12,
    borderWidth: 1.5,
    padding: 16,
    marginVertical: 8,
    bottom: 30,
    width:350,
    left:30,
    top:20,
  },
  link: {
    left:60,
    color: '#6CB4EE',
    marginTop: 16,
    fontWeight: '700',
    fontSize: 20,
    
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    top:20,
    left:30,
  },
  Headingtext: {
    color: '#0C0404',
    fontWeight: 'bold',
    fontSize: 50,
    
  },
  Loginbutton: {
    backgroundColor: '#DE6035', 
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 50,
    width:350,
    left:30,
  },
  LoginbuttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card:{
    backgroundColor: '#FFF8F1',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:584,
    width:420,
    top:30,

  },
  Iconcard:{
    left:30,
    top:50,
    backgroundColor: '#F6F5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 1,
    height:50,
    width:350,
    borderRadius:10,
    

  },
  GoogleIcon:{
     top:10,
     left:50,
     
  },
  facebookIcon:{
    bottom:15,
    left:160,
  },
  phoneicon:{
left:270,
bottom:35
  },

});
