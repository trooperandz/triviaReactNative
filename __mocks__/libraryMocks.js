// Remove the "animated: `useNativeDriver` is not supported because the native animated module is missing" warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
