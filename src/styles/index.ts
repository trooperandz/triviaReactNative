// import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 24,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     alignSelf: 'center',
//     fontSize: 24,
//     paddingVertical: 24,
//   },
// });

export const ScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 24px;
  background-color: #fff;
`;

export const Heading = styled.Text`
  align-self: center;
  font-size: 24px;
  padding: 24px 0;
`;
