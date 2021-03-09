import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { RadioButtonProps } from './types';

export const RADIO_INNER_TEST_ID = 'radio-inner';

export const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { style, isSelected } = props;

  return (
    <View style={[styles.radioOuter, style]}>
      {isSelected ? (
        <View testID={RADIO_INNER_TEST_ID} style={styles.radioInner} />
      ) : null}
    </View>
  );
};
