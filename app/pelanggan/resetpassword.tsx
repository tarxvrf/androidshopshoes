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
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  function handlelogin() {
    if (user === "admin" && pass === "admin") {
      router.push("/login");
    } else {
      alert("gagal");
    }
  }

  function handlepasang() {
    router.push("/pelanggan/registrasi");
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
        <Text style={{ color: "white", paddingLeft: 10 }}>Email</Text>
        <TextInput
          style={styles.inputuser}
          onChangeText={(e) => setuser(e)}
          cursorColor={"white"}
        />
        <View style={styles.buttom}>
          <View style={styles.buttoncontainer}>
            <Button
              title="Reset Password"
              color={"gray"}
              onPress={handlelogin}
            />
          </View>
          <Text style={{ color: "white", marginTop: 20 }}>
            {" "}
            <Link href={"/"}> Kembali ke Login</Link>{" "}
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
  inputuser: {
    height: 40,
    margin: 5,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    color: "white",
    textShadowColor: "white",
  },

  buttom: {
    gap: 10,
    alignItems: "center",
  },
  buttoncontainer: {
    height: 35,
    width: 200,
    backgroundColor: "navy",
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default ResetPassword;
