import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { RadioButtonProps } from './types';

export const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { style, isSelected } = props;

  return (
    <View style={[styles.radioOuter, style]}>
      {isSelected ? (
        <View testID="radio-inner" style={styles.radioInner} />
      ) : null}
    </View>
  );
};
