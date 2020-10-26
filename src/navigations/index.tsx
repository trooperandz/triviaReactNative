import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from 'features/app/screens/HomeScreen';
import { QuestionsScreen } from 'features/questions/screens/QuestionsScreen';
import { ResultsScreen } from 'features/results/screens/ResultsScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#f4f0ee' },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: 'TriviaCraze' }}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionsScreen}
          options={{ headerTitle: 'Questions', headerBackTitle: 'Home' }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            headerTitle: 'Your Results',
            headerBackTitle: undefined,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
