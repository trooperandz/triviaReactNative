import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';

import { styles } from './styles';

type Props = {
  children: React.ReactChild;
  isLoading?: boolean;
  onPress: () => void;
  style?: { [key: string]: string | number };
  type: string;
};

export const Button = (props: Props) => {
  const { isLoading, onPress, style, type, children } = props;

  const textStyle =
    type === 'primary' ? styles.primaryText : styles.secondaryText;

  const backgroundStyle =
    type === 'primary' ? styles.primaryBackground : styles.secondaryBackground;

  const borderStyle =
    type === 'primary' ? styles.primaryBorder : styles.secondaryBorder;

  const spinnerColor = type === 'primary' ? '#fff' : '#51a7f9';

  return (
    <TouchableOpacity
      style={[styles.button, backgroundStyle, borderStyle, { ...style }]}
      onPress={onPress}>
      {isLoading ? (
        <MaterialIndicator color={spinnerColor} size={30} />
      ) : (
        <Text style={[styles.text, textStyle]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
