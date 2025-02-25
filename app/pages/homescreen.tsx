import { ScrollView, View, Text } from "react-native";
import React from "react";
import { Avatar, Card, IconButton, Searchbar } from "react-native-paper";
import styleshomescreen from "../components/Homescreenstyle";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cardimagetop from "../components/Cardimagetop";
import MinimenuCard from "../components/minimenu";
import { useRouter } from "expo-router";
import Newproductitem from "../components/NewProductitem";

const Homescreen = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  function handlepres() {
    router.push("/api/2");
  }

  function handleminimenu(): void {
    alert("coba lagi");
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styleshomescreen.container}>
          {/* Bagian Header dan Search Bar */}
          <View style={styleshomescreen.header}>
            <Image
              source={require("../../assets/images/splash-icon.png")}
              style={styleshomescreen.Image}
            />
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={{width:"80%", height:50, backgroundColor:'white',color:'black'}}
            />
          </View>
          {/* Bagian Header dan Search Bar */}

          {/**Bagian aLL CONTENT */}
          <View style={{ flex: 1, paddingHorizontal: 20, gap: 20 }}>
            {/** Bagian Status USER */}
            <View style={styleshomescreen.container2}>
              <View style={styleshomescreen.card}>
                <Card.Title
                  title="Hello JonDoe"
                  subtitle="Profile User"
                  left={(props) => <Avatar.Icon {...props} icon="folder" />}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </View>
            </View>
            {/** Bagian end Status USER */}

            {/** Bagian Mini Menu USER */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 30,
                width: "100%",
                insetBlockEnd: 50,
                borderWidth: 0.2,
                borderRadius: 20,
                padding: 50,
                gap: 20,
              }}
            >
              <MinimenuCard
                onPress={handleminimenu}
                judul="User"
                nameicon="user"
              />
              <MinimenuCard
                onPress={handleminimenu}
                judul="Image"
                nameicon="image"
              />
              <MinimenuCard
                onPress={handleminimenu}
                judul="video"
                nameicon="film"
              />
              <MinimenuCard
                onPress={handleminimenu}
                judul="Camera"
                nameicon="camera"
              />
            </View>
            {/** Bagian end Mini Menu USER */}

            {/** Bagian NewProduct */}
            <View style={{ insetBlockEnd: 60, gap: 10 }}>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "black" }}
              >
                New Product
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Newproductitem
                    title="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400"
                    onPress={handlepres}
                    judul="Nike War Jordan"
                    subjudul="NewDesign for all"
                  />
                  <Newproductitem
                    title="https://images.pexels.com/photos/718981/pexels-photo-718981.jpeg?auto=compress&cs=tinysrgb&w=400"
                    onPress={handlepres}
                    judul="Nike War Jordan"
                    subjudul="NewDesign for all"
                  />
                  <Newproductitem
                    title="https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&w=400"
                    onPress={handlepres}
                    judul="Nike War Jordan"
                    subjudul="NewDesign for all"
                  />
                </View>
              </ScrollView>
            </View>

            {/** Bagian end NewProduct */}

            {/** Bagian Promo */}
            <View style={{ insetBlockEnd: 50, gap: 10 }}>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "black" }}
              >
                Promo Menarik
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styleshomescreen.container3}>
                  <View style={styleshomescreen.card3}>
                    <Card>
                      <Card.Cover
                        source={{
                          uri: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
                        }}
                      />
                    </Card>
                  </View>
                </View>
                <View style={styleshomescreen.container3}>
                  <View style={styleshomescreen.card3}>
                    <Card>
                      <Card.Cover
                        source={{
                          uri: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=400",
                        }}
                      />
                    </Card>
                  </View>
                </View>
              </ScrollView>
            </View>
            {/** Bagian END  Promo */}

            {/** Bagian Produk Title dam penjelasannya */}
            <View style={{ insetBlockEnd: 50, gap: 10, marginBottom: 10 }}>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "black" }}
              >
                Nike Air Max
              </Text>
              <Cardimagetop
                title="https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=400"
                onPress={handlepres}
                judul="Review Pembeli"
                subjudul="Makin nyaman setelah menggunakan sepatu ini"
              />
            </View>
            {/** Bagian ENd Produk Title dam penjelasannya */}
          </View>
          {/**Bagian END aLL CONTENT */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
