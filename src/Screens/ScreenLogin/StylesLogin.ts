import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#EDF6FD'
  },
  LoginInput: {
    backgroundColor: ' #FFFFFF',
    marginTop: 30,
    borderRadius: 12,
    borderWidth: 1.5,
    padding: 16,
    marginVertical: 8,
    bottom: 30,
  },
  link: {
    color: '#6CB4EE',
    marginTop: 16,
    fontWeight: '700',
    fontSize: 20,
    
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    bottom: 30,
  },
  Headingtext: {
    color: '#0C0404',
    fontWeight: 'bold',
    fontSize: 50,
    bottom: 80,
  },
  Loginbutton: {
    backgroundColor: '#6CB4EE', 
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  LoginbuttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
