import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    left:50,
    top:20,
  },
  link: {
    left:80,
    color: '#6CB4EE',
    marginTop: 16,
    fontWeight: '700',
    fontSize: 20,
    
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    top:20,
    left:60,
  },
  Headingtext: {
    color: '#0C0404',
    fontWeight: 'bold',
    fontSize: 50,
    
  },
  Loginbutton: {
    backgroundColor: '#9400D3', 
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 50,
    width:350,
    left:50,
  },
  LoginbuttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card:{
    backgroundColor: '#FAE6FA',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:584,
    width:450,
    

  },
  Iconcard:{
    marginLeft:50,
    top:50,
    backgroundColor: '#F6F5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 1,
    height:70,
    width:350,
    borderRadius:10,
    

  },
  GoogleIcon:{
     top:20,
     left:50,
     
  },
  facebookIcon:{
    bottom:3,
    left:160,
  },
  phoneicon:{
left:270,
bottom:23
  },
  loginimage:{
    marginTop:8,
    left:20,
     width:'110%',
     height:290,
     
  },

});
