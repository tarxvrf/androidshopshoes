import { TextInput, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TextInputIcon = ({
  placeholder,
  icon,
  onChangeText
  ,secureTextEntry,
  maxlength
}: {
  placeholder?: string;
  secureTextEntry:boolean
  icon?: any;
  maxlength: number
  onChangeText?: () => void;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: "100%",
        height: 40,        
        borderWidth:0.3,
        paddingLeft: 10,
        borderRadius: 10, 
        backgroundColor:'white'     
         }}
    >
      <FontAwesome name={icon} size={20} />
      <TextInput maxLength={maxlength}  placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
    </View>
  );
};

export default TextInputIcon;
