import { Dimensions, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";

const Cardimagetop = ({
  title,judul,subjudul,
  onPress,
}: {
  title: string;judul:string,subjudul:string
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.imagecontainer} onPress={onPress}>
      <Image source={{uri:title}} style={{width: "100%", height:"100%",resizeMode:'cover',borderRadius:20}}/>
    </TouchableOpacity> 
    <View style={{padding:10,gap:10}}> 
    <Text style={styles.texttitle}>{judul}</Text>
      <Text>{subjudul}</Text> 
      </View> 
    </View>
  );
};
export default Cardimagetop;
const styles = StyleSheet.create({
container:{
    flex:1,
    height:"100%",
    borderColor:'black',
    borderWidth:0.2,     
    borderRadius:10,     
    gap:10,
     
},
  imagecontainer: {     
    borderRadius: 20,
    width:'100%',
    height:300, 
      
  },
  texttitle:{
    fontSize:14,fontWeight:'bold',

  }
});
