import { TouchableOpacity } from "react-native";
import { Text} from "react-native";
import React from "react";

const Roundedbutton = ({
  title,
  background,
  onPress,
  color,
}: {
  title: string;
  color: string;
  background:string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={ {
      backgroundColor: `${background}`,
      padding: 10,
      borderRadius: 10,
      elevation: 20,
      width: "100%",
      height: 40,
    }} onPress={onPress}>

      <Text
        style={{
          alignSelf: "center",
          color: `${color}`,
        }}
      >       
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Roundedbutton;
