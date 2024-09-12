import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

    return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'globe' : 'globe-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: 'Save',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'trending-up' : 'trending-up-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
            name="tools"
            options={{
                title: 'Tools',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'git-compare' : 'git-compare-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="account"
            options={{
                title: 'Account',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
