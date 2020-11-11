import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './HomeStack';
import { ResultsStack } from './ResultsStack';

export const RootNavigation = () => {
  const isGameCompleted = useSelector(
    (state: any) => state.app.isGameCompleted,
  );

  return (
    <NavigationContainer>
      {isGameCompleted ? <ResultsStack /> : <HomeStack />}
    </NavigationContainer>
  );
};
