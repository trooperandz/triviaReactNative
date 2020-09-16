import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { HomeScreen } from 'screens/HomeScreen';
import HomeScreen from '@features/app/screens/HomeScreen';
import { QuestionsScreen } from '@features/questions/screens/QuestionsScreen';
import { ResultsScreen } from 'screens/ResultsScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'TriviaCraze' }}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionsScreen}
          options={{ headerBackTitle: 'Home' }}
        />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
