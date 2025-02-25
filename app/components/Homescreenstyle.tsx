import { StyleSheet,Dimensions } from "react-native";

const styleshomescreen = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },
    header: {
      height: 200,
      flexDirection: "row",
      gap: 10,
      backgroundColor: "teal",
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
      padding: 20,
    },
    Image: {
      width: 50,
      height: 50,
      borderRadius: 20,
    },
    inputsearch: {
      borderColor: "white",
      width: "80%",
      height: 50,
      borderWidth: 1,
      padding:10,
      borderRadius: 10,     
      backgroundColor:'white'
    },
    container2: {
      insetBlockEnd: 60,
      alignSelf:'center',  
      height: 100,
      width: Dimensions.get('screen').width*0.9,
    },
    card: {      
      borderRadius: 20,
      backgroundColor: "#fff",
      borderColor: "black",
      borderWidth: 0.2,
      elevation:20,
      padding:10,
    },
    container3: {
      width: Dimensions.get('screen').width,
      flexDirection: "row",      
      alignSelf:'center',      
      padding:10,
      elevation:20   
      
    },
    card3: {
      height:"100%",
      width: "100%",   
      borderRadius: 20,
      backgroundImage: "linear-gradient(to right, #f7d2c4, #ffc67d)",
    },
  });
  export default styleshomescreen
  