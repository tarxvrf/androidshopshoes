import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import styles from "../components/Loginstyle";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Roundedbutton from "../components/Roundedbutton";
import TextInputIcon from "../components/TextInputIcon";

function Loginpage() {
  const navigation = useNavigation();
  const router = useRouter();
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  function handlelogin() {
    if (user === "admin" && pass === "admin") {
      navigation.navigate("Homes" as never);
    } else {
      alert('gagal');
    }
  }

  function handlepasang() {
    router.push("/pages/customer/registrasi");
  }

  function handlchangeuser(e:any): void {
  setuser(e)
  }
  function handlchangepass(e:any): void {
    setpass(e)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header} />
      <View style={{ marginVertical: 50, alignSelf: "center" }}>
        <Text
          style={{
            color: "navy",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Silahkan Login
        </Text>
        <FontAwesome
          style={{ alignSelf: "center" }}
          size={70}
          name="lock"
          color={"orange"}
        />
      </View>

      <View style={styles.viewinputcontainer}>
        <TextInputIcon
          placeholder="Username"
          icon={"user"}
          onChangeText={handlchangeuser as any}
          secureTextEntry={false}
          maxlength={8}
        />
        <TextInputIcon
          placeholder="Password"
          icon={"key"}
          onChangeText={handlchangepass as any}
          secureTextEntry={true}
          maxlength={8}
        />
        <View style={styles.buttom}>
          <Text style={{ color: "navy" }}>
            <Link href={"/pages/customer/resetpassword"}>Forgot Password</Link>
          </Text>
          <Roundedbutton
            background={"navy"}
            color="white"
            title="LOGIN"
            onPress={handlelogin}
          />
          <Text style={{ color: "navy" }}>Or</Text>
          <Roundedbutton
            background={"navy"}
            color="white"
            title="BUAT AKUN"
            onPress={handlepasang}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Loginpage;
