import React from 'react';
import { View, StyleSheet } from 'react-native';

import { styles } from './styles';
import { RadioButtonProps } from './types';

export const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { style, isSelected } = props;

  return (
    <View style={[styles.radioOuter, style]}>
      {isSelected ? <View style={styles.radioInner} /> : null}
    </View>
  );
};
