import React, { ReactChild } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface Props {
  children: ReactChild;
  style?: { [key: string]: any };
}

export const SafeArea = (props: Props) => {
  return (
    <SafeAreaView style={[styles.safeArea, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
