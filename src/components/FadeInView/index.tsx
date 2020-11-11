import React, { useEffect, useRef, ReactChild } from 'react';
import { Animated } from 'react-native';

type Props = {
  children: ReactChild;
  duration?: number;
  style?: { [key: string]: any };
};

export const FadeInView = (props: Props) => {
  const { children, duration = 400, style } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [duration, fadeAnim]);

  return (
    <Animated.View style={{ ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};
