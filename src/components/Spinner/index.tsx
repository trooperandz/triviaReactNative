import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { styles as globalStyles } from 'styles';
import { styles } from './styles';

export const Spinner = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#4aa" style={styles.spinner} />
    </View>
  );
};
