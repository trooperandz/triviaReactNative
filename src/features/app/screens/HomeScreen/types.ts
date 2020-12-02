import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'navigations/types';

export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export type FormErrors = {
  userFirstName?: string;
  category?: string;
};
