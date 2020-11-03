import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #fff;
  z-index: 1;
`;

export const Heading = styled.Text`
  font-size: 28px;
  color: #51a7f9;
`;

export const styles = StyleSheet.create({
  header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
