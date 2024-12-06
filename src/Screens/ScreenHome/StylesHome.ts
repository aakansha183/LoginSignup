import { StyleSheet } from "react-native";

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
    width:400,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin:10,
    
  },
  welcomeHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageFetched: {
    width: '100%',
    height: 250,
    borderRadius:10,
  },
  imageTitle:{
    marginLeft:15,
    top:10,
    fontSize:25,
    color:'#0C0404',
    fontWeight:'bold',
    marginTop:10,
    marginBottom:20,
    
  },
  likes:{
    left:0,
    fontSize: 18,
    color: '#888',
    padding: 5,
    borderRadius: 3,
    
  },
  likeContainer: {
    flexDirection: 'row',
    marginLeft:10,
    alignItems: 'center',
  },
  
  views:{
    fontSize: 18,
    color: '#888',
    padding: 5,
    borderRadius: 3,
    
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft:10,
  },
  dotStyle: {
    width: 20,
    height: 12,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotContainer: {
    position: 'absolute',
    bottom: ('5%'),
    alignSelf: 'center',
  },
 
});