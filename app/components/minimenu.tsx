import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const MinimenuCard = ({
 judul,onPress,nameicon
}: {
  judul:string,nameicon:any
  onPress: () => void;
}) => {
  return (
    <View style={{flex:1}}>
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={nameicon} size={30}  color="black" />
      <Text style={styles.texttitle}>{judul}</Text>      
    </TouchableOpacity>    
    </View>
  );
};
export default MinimenuCard;
const styles = StyleSheet.create({

  texttitle:{
    fontSize:14,fontWeight:'bold'
  }
});
