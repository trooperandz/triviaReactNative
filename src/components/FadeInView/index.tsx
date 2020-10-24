import React, { useEffect, useRef, ReactChild } from 'react';
import { Animated } from 'react-native';

type Props = {
  children: ReactChild;
  style?: { [key: string]: any };
};

export const FadeInView = (props: Props) => {
  const { children, style } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};
