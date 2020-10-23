import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

export const Spinner = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#4aa" style={styles.spinner} />
    </View>
  );
};
