import React from 'react';
import { View } from 'react-native';

import { RadioButton } from 'components/RadioButton';
import { RadioWrapper, RadioWithLabel, RadioLabel } from './styles';
import { RadioGroupProps } from './types';

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { options, onSelect, selectedValue } = props;

  return (
    <View>
      {options.map(({ value, title }) => (
        <RadioWrapper key={value}>
          <RadioWithLabel onPress={() => onSelect(value)}>
            <RadioButton isSelected={selectedValue === value} />
            <RadioLabel>{title}</RadioLabel>
          </RadioWithLabel>
        </RadioWrapper>
      ))}
    </View>
  );
};
