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
          title: 'TriviaCraze',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Questions"
          component={QuestionsScreen}
          options={{ headerBackTitle: 'Back' }}
        />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
