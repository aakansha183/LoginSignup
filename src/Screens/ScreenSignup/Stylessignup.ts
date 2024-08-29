import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#EDF6FD'
  },
  Signupinput: {
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
  errorText: {
    color: 'red',
    bottom: 30,
  },
  HeadingTitle: {
    color: '#9400D3',
    fontWeight: 'bold',
    fontSize: 30,
  top:380,
  // marginLeft:20,
  textAlign:'center'
  },
  Signupbutton: {
    backgroundColor: '#9400D3', 
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 50,
    width:350,
    left:50,
  },
  SignupbuttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Signupimage:{
    marginTop:8,
     width:'110%',
     height:290,
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
  link: {
    left:80,
    color: '#6CB4EE',
    marginTop: 16,
    fontWeight: '700',
    fontSize: 20,
    
  },
});
