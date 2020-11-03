import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 18px;
  font-size: 18px;
  text-align: center;
`;

export const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    width: 240,
    alignSelf: 'center',
    position: 'absolute',
    marginBottom: 0,
    bottom: 24,
  },
});
