import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "@/app/components/Registrasistyle";
import { Link, useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text,ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputIcon from "@/app/components/TextInputIcon";
import Roundedbutton from "@/app/components/Roundedbutton";

function Registrasi() {
  const router = useRouter();
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [alamat, setalamat] = useState("");
  const [tanggal, settanggal] = useState("");
  const navigation = useNavigation();

  function handlepasang() {
    ToastAndroid.show("Maaf fitur blm tersedia", 3000);
  }

  function handlchangeuser(e:any): void {
    setuser(e);
  }
  function handlchangepass(e:any): void {
    setpass(e);
  }

  function handlchangealamat(e:any): void {
    setalamat(e)
  }

  function handlchangetanggal(e:any): void {
   settanggal(e)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.headertitle}>
        <Text style={styles.texttitle}>Yuuk</Text>
        <Text style={{fontSize:40,color:'white'}}>Pasang WiFi</Text>
      
        </View>
      </View>

      <View style={styles.Formcontainer}>
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
        <TextInputIcon
          placeholder="contoh : Jl. Raya No. 123 London Barat 1750"
          icon={"home"}
          onChangeText={handlchangealamat as any}
          secureTextEntry={false}
          maxlength={35}
        />
        <TextInputIcon
          placeholder="Tanggal Pasang"
          icon={"calendar"}
          onChangeText={handlchangetanggal as any}
          secureTextEntry={false}
          maxlength={10}
        />
        <View style={styles.buttom}>
          <Text style={{ fontSize: 12 }}>
            Saya akan mematuhi peraturan yang berlaku
          </Text>
          <View style={styles.buttoncontainer}>
            <Roundedbutton background={'navy'} color={'white'} onPress={handlepasang} title="KIRIM DATA" />
          </View>
          <Text style={{ fontSize: 12 }}>
            Anda pelanggan ?{" "}
            <Link style={{ color: "navy", fontWeight: "bold" }} href={"/"}>
              SignIn
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Registrasi;
