import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#EDF6FD'
  },
  input: {
    color: '#0C0404',
    backgroundColor: '#F5FEFD',
    marginTop: 30,
    borderRadius: 12,
    borderWidth: 1.5,
    padding: 16,
    marginVertical: 8,
    bottom: 30,
  },
  errorText: {
    color: 'red',
    bottom: 30,
  },
  HeadingTitle: {
    color: '#0C0404',
    fontWeight: 'bold',
    fontSize: 50,
    bottom: 50,
  },
  button: {
    backgroundColor: '#6CB4EE', 
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
