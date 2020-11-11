import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Card = styled.View`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 32px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const CardBody = styled.View`
  padding: 12px 14px;
`;

export const Status = styled.Text`
  margin-left: 8px;
  color: gray;
`;

export const Answer = styled.Text`
  margin-bottom: 6px;
  color: gray;
`;

export const Question = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 56,
  },
});