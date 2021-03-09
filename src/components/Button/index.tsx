import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';

import { styles } from './styles';
import colors from 'styles/colors';

type Props = {
  children: React.ReactChild;
  isLoading?: boolean;
  onPress: () => void;
  style?: { [key: string]: string | number };
  type: string;
};

export const BUTTON_TEST_ID = 'button';
export const BUTTON_SPINNER_TEST_ID = 'button-spinner';

export const Button = (props: Props) => {
  const { isLoading, onPress, style, type, children } = props;

  const textStyle =
    type === 'primary' ? styles.primaryText : styles.secondaryText;

  const backgroundStyle =
    type === 'primary' ? styles.primaryBackground : styles.secondaryBackground;

  const borderStyle =
    type === 'primary' ? styles.primaryBorder : styles.secondaryBorder;

  const spinnerColor =
    type === 'primary' ? colors.onButtonPrimary : colors.onButtonSecondary;

  return (
    <TouchableOpacity
      testID={BUTTON_TEST_ID}
      style={[styles.button, backgroundStyle, borderStyle, { ...style }]}
      onPress={onPress}>
      {isLoading ? (
        <View testID={BUTTON_SPINNER_TEST_ID}>
          <MaterialIndicator color={spinnerColor} size={30} />
        </View>
      ) : (
        <Text style={[styles.text, textStyle]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
