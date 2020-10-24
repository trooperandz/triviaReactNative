import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

type Props = {
  onChangeText: (text: string) => void;
};

export const TextInput = (props: Props) => {
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
