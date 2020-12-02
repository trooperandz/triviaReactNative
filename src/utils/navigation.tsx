import { RefObject, createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef: RefObject<NavigationContainerRef> = createRef();

// Perform root navigation actions outside of components after mounting
export const navigate = (name: string, params: any) => {
  navigationRef.current?.navigate(name, params);
};
