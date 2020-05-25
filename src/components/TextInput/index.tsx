import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

export const TextInput = (props) => {
  const { onChangeText, ...rest } = props;

  return (
    <View>
      <S.NameInput
        onChangeText={(text: string) => onChangeText(text)}
        {...rest}
      />
    </View>
  );
};
