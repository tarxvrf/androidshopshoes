import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
  
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',headerShown:false}} >
        <Tabs.Screen
        name="homescreen"
        options={{
          title:'home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,        
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title:'user',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
     
    
    </Tabs>
  );
}
