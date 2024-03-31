import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: '#7cb9e8' },
          tabBarShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name='tasks' size={24} color='#7cb9e8' />
            ) : (
              <FontAwesome name='tasks' size={24} color='black' />
            ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: { color: '#7cb9e8' },
          tabBarShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name='account-details'
                size={24}
                color='#7cb9e8'
              />
            ) : (
              <MaterialCommunityIcons
                name='account-details'
                size={24}
                color='black'
              />
            ),
        }}
      />
      <Tabs.Screen
        name='calendar'
        options={{
          tabBarLabel: 'Calendar',
          tabBarLabelStyle: { color: '#7cb9e8' },
          tabBarShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name='calendar' size={24} color='#7cb9e8' />
            ) : (
              <AntDesign name='calendar' size={24} color='black' />
            ),
        }}
      />
    </Tabs>
  );
}
