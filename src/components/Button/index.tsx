import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export const Button = (props) => {
  const { onPress, style, children } = props;

  return (
    <View style={[styles.container, { ...style }]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
