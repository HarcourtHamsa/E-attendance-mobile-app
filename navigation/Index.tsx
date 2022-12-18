import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { isIphoneX } from "react-native-iphone-x-helper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Login,
  Signup,
  Account,
  Dashboard,
  Settings,
  Attendance,
  Statistics,
  StatisticsData,
  Radar,
} from "../screens";
import assetIsLoaded from "../hooks/useLoadedAssets";
import { COLORS, FONTS, SIZES } from "../theme";
import TabIcon from "../components/TabIcon";
import SuccessStatus from "../screens/dashboard/SuccessStatus";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// const StatisticsStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Statistics"
//         options={{ headerShown: false }}
//         component={Statistics}
//       />
//       <Stack.Screen
//         name="Data"
//         options={{ headerShown: false }}
//         component={StatisticsData}
//       />
//     </Stack.Navigator>
//   );
// };

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           borderTopRightRadius: 10,
//           borderTopLeftRadius: 10,
//           backgroundColor: '#D9DCDE',
//           borderTopWidth: 2,
//           height: isIphoneX ? 90 : 40,
//           paddingBottom: isIphoneX ? 40 : 20,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return <TabIcon icon={"home"} label="Home" focused={focused} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="StatisticsStack"
//         component={StatisticsStack}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <TabIcon
//                 icon={"pie-chart"}
//                 label="Statistics"
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <TabIcon icon={"settings"} label="Settings" focused={focused} />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Account"
        options={{ headerShown: false }}
        component={Account}
      />
      <Stack.Screen
        name="Signup"
        options={{ headerShown: false }}
        component={Signup}
      />
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false, gestureEnabled: false }}
        component={Dashboard}
      />
      <Stack.Screen
        name="Statistics"
        options={{ headerShown: false }}
        component={Statistics}
      />
      <Stack.Screen
        name="Data"
        options={{ headerShown: false }}
        component={StatisticsData}
      />
      <Stack.Screen
        name="Settings"
        options={{ headerShown: false }}
        component={Settings}
      />
      <Stack.Screen
        name="Success"
        options={{ headerShown: false, gestureEnabled: false }}
        component={SuccessStatus}
      />
    </Stack.Navigator>
  );
}
