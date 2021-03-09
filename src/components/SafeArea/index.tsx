import React, { ReactChild } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

interface Props {
  children: ReactChild;
  style?: { [key: string]: any };
}

export const SafeArea = (props: Props) => {
  return (
    <>
      <SafeAreaView style={[styles.safeArea, props.style]} />
      <StatusBar backgroundColor="#51a7f9" barStyle="light-content" />
      {props.children}
      <SafeAreaView style={{ backgroundColor: '#fff' }} />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    backgroundColor: '#51a7f9',
  },
});
