import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Alert = styled.View`
  align-items: center;
  min-height: 150px;
  width: 60%;
  padding: 18px;
  border-radius: 20px;
  background-color: #fff;
`;

export const AlertText = styled.Text`
  margin-bottom: 32px;
  color: #333;
`;

export const styles = StyleSheet.create({
  alert: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginBottom: 0,
  },
});
