import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  type: string;
  onPress: () => void;
  style?: { [key: string]: string };
  children: React.ReactChild;
};

export const Button = (props: Props) => {
  const { onPress, style, type, children } = props;

  const textStyle =
    type === 'primary' ? styles.primaryText : styles.secondaryText;

  const backgroundStyle =
    type === 'primary' ? styles.primaryBackground : styles.secondaryBackground;

  const borderStyle =
    type === 'primary' ? styles.primaryBorder : styles.secondaryBorder;

  return (
    <TouchableOpacity
      style={[styles.button, backgroundStyle, borderStyle, { ...style }]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};
