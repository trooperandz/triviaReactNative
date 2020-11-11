import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ResultsScreen } from 'features/results/screens/ResultsScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const ResultsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Results">
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
