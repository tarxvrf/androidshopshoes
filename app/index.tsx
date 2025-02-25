import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./pages/homescreen";
import Registrasi from "./pages/customer/registrasi";
import ResetPassword from "./pages/customer/resetpassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Loginpage from "./pages/login";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Loginpage}
        options={{ statusBarBackgroundColor: "navy", headerShown: false }}
      />
      <Stack.Screen
        name="Homes"
        component={Mytab}
        options={{ statusBarBackgroundColor: "navy", headerShown: false }}
      />
      <Stack.Screen
        name="Registrasi"
        component={Registrasi}
        options={{ statusBarBackgroundColor: "navy", headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ statusBarBackgroundColor: "white",}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function Mytab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Myhomes"
        component={Homescreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="home"
              color={focused ? "blue" : "gray"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Registrasi"
        component={Registrasi}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="user"
              color={focused ? "blue" : "gray"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;

const styles = StyleSheet.create({});
