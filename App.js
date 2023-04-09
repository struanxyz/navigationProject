import * as React from "react";
import TestScreen from "./navigation/screens/TestScreen";
import HomeScreen from "./navigation/screens/HomeScreen";
import GroupsScreen from "./navigation/screens/GroupsScreen";
import QuestionnairesScreen from "./navigation/screens/QuestionnaireScreen";
import GoalsScreen from "./navigation/screens/GoalsScreen";

import DetailsScreen from "./navigation/screens/DetailsScreen";
import SettingsScreen from "./navigation/screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = "Home";
const groupsName = "Groups";
const questionnnaireName = "Questionnaire";
const goalsName = "Goals";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                activeTintColor: "tomato",
                inactiveTintColor: "grey",
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 },

                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;

                  if (rn === homeName) {
                    iconName = focused ? "home" : "home-outline";
                  } else if (rn === groupsName) {
                    iconName = focused ? "people" : "people-outline";
                  } else if (rn === questionnnaireName) {
                    iconName = focused ? "pencil" : "pencil-outline";
                  } else if (rn === goalsName) {
                    iconName = focused
                      ? "checkmark-done"
                      : "checkmark-done-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "grey",
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 },
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Groups"
                component={GroupsScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Questionnaire"
                component={QuestionnairesScreen}
                options={{ headerShown: false }}
              />

              <Tab.Screen
                name="Goals"
                component={GoalsScreen}
                options={{ headerShown: false }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
