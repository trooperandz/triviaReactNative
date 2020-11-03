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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionsScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
