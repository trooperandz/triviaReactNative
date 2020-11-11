import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from 'features/app/screens/HomeScreen';
import { QuestionsScreen } from 'features/questions/screens/QuestionsScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStack = () => {
  return (
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
    </Stack.Navigator>
  );
};
