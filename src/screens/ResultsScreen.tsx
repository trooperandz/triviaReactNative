import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { styles as globalStyles } from 'styles';

export const ResultsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Results Screen</Text>
    </View>
  );
};
