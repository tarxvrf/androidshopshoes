import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Page() {
  const router = useRouter();
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  function handlelogin() {
    if (user === "admin" && pass === "admin") {
      router.push("/login");
    } else {
      alert("gagal");
    }
  }

  function handlepasang(){
    router.push('/pelanggan/registrasi')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View style={{width:100}}>
        <Text style={{fontSize:29,color:'white'}}>
          Ayo
        </Text> 
        <Text style={{fontSize:29,color:'white'}}>
          Pasang Wifi 
          </Text> 
          <Text style={{fontSize:29,color:'white'}}>
         Kami !
          </Text> 
        </View>
      </View>
      

      <View style={styles.viewcontainer}>
        <TextInput
          style={styles.inputuser}
          onChangeText={(e) => setuser(e)}
          placeholder="Nama Lengkap"
        />
        <TextInput
          style={styles.inputpass}
          onChangeText={(e) => setpass(e)}
          placeholder="No WhatsApp"
          
        />
         <TextInput
          style={styles.inputuser}
          onChangeText={(e) => setuser(e)}
          placeholder="Alamat"
        />
        <TextInput
          style={styles.inputpass}
          onChangeText={(e) => setpass(e)}
          placeholder="Tanggal Pemasangan"
          
        />
        <View style={styles.buttom}>
          
          <Text style={{fontSize:12}}>Saya akan mematuhi peraturan yang berlaku</Text>
          <View style={styles.buttoncontainer}>
            <Button title="Kirim Data" color={"navy"} onPress={handlelogin} />
          </View>
          <Text style={{fontSize:12}}>Anda pelanggan ? <Link style={{color:'navy',fontWeight:'bold'}} href={"/"}>SignIn</Link></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    backgroundColor: "navy",
    height: 200,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius:50,
    paddingLeft:10
  },
  viewcontainer: {
    alignSelf:'center',
    marginTop:30,
    width: Dimensions.get("window").height*0.4,
    height: Dimensions.get("window").height,
    padding: 10,
    gap: 10,     
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
    borderRadius: 20,
    padding: 10,
  },
  buttom:{
    paddingTop:20,
    gap:10,
    alignItems:'center'
  },
  buttoncontainer: {
    height: 35,
    width:200,
    backgroundColor: "navy",
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default Page;
