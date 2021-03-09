import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #51a7f9;
  z-index: 1;
`;

export const Heading = styled.Text`
  font-size: 26px;
  color: #fff;
`;

export const BackIcon = styled.TouchableOpacity`
  position: absolute;
  left: 12px;
`;

export const styles = StyleSheet.create({
  header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    elevation: 2,
  },
});
