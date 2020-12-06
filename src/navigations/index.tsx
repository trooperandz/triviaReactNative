import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from 'utils/navigation';
import { RootStack } from './RootStack';

export const RootNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <RootStack />
  </NavigationContainer>
);
