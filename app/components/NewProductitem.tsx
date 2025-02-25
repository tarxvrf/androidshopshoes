import { Dimensions, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";

const Newproductitem = ({
  title,judul,subjudul,
  onPress,
}: {
  title: string;judul:string,subjudul:string
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}> 
    <TouchableOpacity style={styles.imagecontainer} onPress={onPress}>
      <Image source={{uri:title}} style={{width:"100%",height:"100%", resizeMode:'cover',borderRadius:20}}/>
    </TouchableOpacity>
    <View style={{gap:5,paddingTop:5,paddingLeft:5}}>
      <Text style={styles.texttitle}>{judul}</Text>
      <Text style={{fontWeight:'semibold',fontSize:12}}>{subjudul}</Text>
      <View style={{flexDirection:"row",gap:10}} >
      <Text style={{fontWeight:'bold',fontSize:12}}>Price</Text>
      <Text style={{fontWeight:'thin',fontSize:12}}>USD 500</Text>
      </View>      
     </View>
    </View>
  );
};
export default Newproductitem;
const styles = StyleSheet.create({
container:{
    width:200,
    height:280,    
    borderTopWidth:0,
    borderRadius:20,
    borderWidth:0.2   
    
    
},
  imagecontainer: {      
    borderRadius: 20,
    width:200, 
    height:200,
    gap:10, 
    
    
      
  },
  texttitle:{
    fontSize:14,fontWeight:'bold',

  }
});
