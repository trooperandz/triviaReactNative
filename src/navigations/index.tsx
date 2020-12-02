import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './HomeStack';
import { ResultsStack } from './ResultsStack';
import { navigationRef } from 'utils/navigation';

export const RootNavigation = () => {
  const isGameCompleted = useSelector(
    (state: any) => state.app.isGameCompleted,
  );

  return (
    <NavigationContainer ref={navigationRef}>
      {isGameCompleted ? <ResultsStack /> : <HomeStack />}
    </NavigationContainer>
  );
};
