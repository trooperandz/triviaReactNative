import React from 'react';
import { View } from 'react-native';
import { AllHtmlEntities } from 'html-entities';

import { RadioButton } from 'components/RadioButton';
import { RadioWrapper, RadioWithLabel, RadioLabel } from './styles';
import { RadioGroupProps } from './types';

const entities = new AllHtmlEntities();

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { options, onSelect, questionIndex } = props;

  return (
    <View>
      {options.map(({ value, title, selected_answer }, i) => {
        const index: number = questionIndex || i;

        return (
          <RadioWrapper key={value}>
            <RadioWithLabel onPress={() => onSelect(value, index)}>
              <RadioButton isSelected={selected_answer === value} />
              <RadioLabel>{entities.decode(title)}</RadioLabel>
            </RadioWithLabel>
          </RadioWrapper>
        );
      })}
    </View>
  );
};
