import React, { forwardRef, Ref } from 'react';
import { TextInput as Input, View } from 'react-native';

import * as S from './styles';

type Props = {
  onChangeText: (text: string) => void;
  hasError: string | undefined;
};

export const TEXT_INPUT_TEST_ID = 'text-input';

export const TextInput = forwardRef((props: Props, ref: Ref<Input>) => {
  const { hasError, onChangeText, ...rest } = props;

  return (
    <View>
      <S.NameInput
        autoCapitalize="words"
        hasError={hasError}
        onChangeText={(text: string) => onChangeText(text)}
        testID={TEXT_INPUT_TEST_ID}
        ref={ref}
        {...rest}
      />
    </View>
  );
});
