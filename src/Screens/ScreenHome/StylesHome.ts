import { StyleSheet } from "react-native";
import { Header } from "react-navigation-stack";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#EDF6FD'
  },
HeadingTitle:{
color:'#0C0404',
fontSize:25,
textAlign:'center',
  },
  imageContainer: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    
  },
  Header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius:12,
  },
  imageTitle:{
    top:10,
    fontSize:25,
    color:'#0C0404',
    fontWeight:'bold',
    marginTop:10,
    marginBottom:20,
  },
  likes:{
    top:20,
    left:10,
    fontSize: 18,
    color: '#888',
    padding: 5,
    borderRadius: 3,
    
  },
  comments:{
    fontSize: 18,
    color: '#888',
    padding: 5,
    borderRadius: 3,
    left :252,
    bottom:50,

  },
  views:{
    fontSize: 18,
    color: '#888',
    padding: 5,
    borderRadius: 3,
left:115,
bottom:14,

  }
});