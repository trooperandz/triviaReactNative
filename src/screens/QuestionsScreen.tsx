import React from 'react';
import { View, Text } from 'react-native';

import { Button } from 'components/Button';
import { styles as globalStyles } from 'styles';

export const QuestionsScreen = (props) => {
  const { navigation } = props;

  const handlePress = () => navigation.navigate('Results');

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Questions Screen</Text>
      <Button onPress={handlePress}>Go to results screen</Button>
    </View>
  );
};
