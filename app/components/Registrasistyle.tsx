import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Header: {
      backgroundColor: "navy",
      width:Dimensions.get('screen').width,
      height: 200,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius:50,
      paddingVertical:10,
      marginBottom:30
    },
    headertitle:{
      height:100,
      width:"100%",         
      alignItems:'center',
      marginVertical:'10%',
      justifyContent:'center'

    },texttitle:{
      fontSize:50,
      color:'gold'
    },
    Formcontainer: {
      alignSelf:'center',
      marginTop:30,
      width: Dimensions.get("window").height*0.4,
      height: Dimensions.get("window").height,
      padding: 10,
      gap: 20,     
    },    
    buttom:{
      paddingTop:20,
      gap:20,
      alignItems:'center'
    },
    buttoncontainer: {
      height: 35,
      width:200,
      backgroundColor: "navy",
      borderRadius: 10,
      alignSelf: "center",
      marginBottom:10
    },
  });
  
  export default styles;
  