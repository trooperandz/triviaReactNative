import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from 'features/app/screens/HomeScreen';
import { QuestionsScreen } from 'features/questions/screens/QuestionsScreen';
import { ResultsScreen } from 'features/results/screens/ResultsScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ header: () => null }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Questions" component={QuestionsScreen} />
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
