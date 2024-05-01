import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash, SignIn,  Verification, Home, Profil, Shop, Dana, History, Mission, Notification, Health, Invite} from "../pages";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
      <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
      <Stack.Screen name="Dana" component={Dana} options={{ headerShown: false }} />
      <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
      <Stack.Screen name="Mission" component={Mission} options={{ headerShown: false }} />
      <Stack.Screen name="Health" component={Health} options={{ headerShown: false }} />
      <Stack.Screen name="Invite" component={Invite} options={{ headerShown: false }} />
      

    </Stack.Navigator>
  );
}
