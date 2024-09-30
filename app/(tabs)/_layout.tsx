import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6A00",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tarefas",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "list" : "list-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendario",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar-outline" : "calendar-sharp"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Meu perfil",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
