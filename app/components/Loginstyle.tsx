import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Header: {
      backgroundColor: "navy",
      height: 150,
      borderBottomLeftRadius: 200,
      elevation:30
    },
    viewinputcontainer: {
      height: Dimensions.get("window").height,      
      gap: 10,
      borderColor: "navy",
      borderWidth: 2,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical:"10%",
      paddingHorizontal:"10%"  
    },
    inputuser: {
      height: 40,
      margin: 5,
      borderColor: "navy",
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
    },
    inputpass: {
      height: 40,      
      margin: 5,
      borderColor: "navy",
      borderWidth: 2,
      marginBottom: 20,
      borderRadius: 20,
      padding: 10,
    },
    buttom:{
      gap:10,
      alignItems:'center'
    },
  });
  export default styles;