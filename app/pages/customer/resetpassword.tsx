import Roundedbutton from "@/app/components/Roundedbutton";
import TextInputIcon from "@/app/components/TextInputIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ResetPassword() {
  const router = useRouter();
  const [email, setemail] = useState("");
 

  function handlereset(){
    alert('fitur blm tersedia')
  }

    function handlechangeemail(e:any): void {
   setemail(e)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical:80, alignContent:'center',alignItems:'center' }}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="lock"
          size={60}
          color="black"
        />
        <Text
          style={{
            color: "navy",
            fontSize: 40,
            fontWeight: "bold",           
          }}
        >
          Lupa
        </Text>
        <Text style={{
            color: "navy",
            fontSize: 40,
            fontWeight: "semibold",
            marginBottom: 10,
          }}>Password</Text>
        <Text style={{ color: "black", fontSize: 15, marginBottom: 10 }}>
          Masukkan Email Anda
        </Text>
        <Text>Jika Lupa Password</Text>
      </View>

      <View style={styles.viewcontainer}>
        <Text style={{ color: "white" }}>Email</Text>
        <TextInputIcon placeholder={'Masukkan Email Yang Terdaftar'} onChangeText={handlechangeemail as any} maxlength={30} secureTextEntry={false} icon={'envelope'}/>
        <View style={styles.buttom}>
          <View style={styles.buttoncontainer}>
           <Roundedbutton color={'black'} background={'gold'} title="RESET PASSWORD" onPress={handlereset} />
          </View>
          <Text style={{ color: "white", marginTop: 20 }}>
            {" "}
            <Link href={"/pages/login"}> Kembali ke Login</Link>{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewcontainer: {
    flex: 1,
    height: Dimensions.get("window").height,
    padding: 10,
    gap: 10,
    backgroundColor: "navy",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    paddingHorizontal: 50,
    color: "white",
  }, 
  buttom: {
    marginTop:30,
    gap: 10,
    alignItems: "center",
  },
  buttoncontainer: {
    height: 35,
    width: 200,    
    borderRadius: 20,
    alignSelf: "center",   
      },
});

export default ResetPassword;
