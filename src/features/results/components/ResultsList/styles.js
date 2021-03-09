import styled, { css } from 'styled-components/native';
import { StyleSheet } from 'react-native';

const answer = css`
  margin-bottom: 6px;
  color: gray;
`;

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

export const AnswerWrapper = styled.View`
  flex-direction: row;
`;

export const AnswerTitle = styled.Text`
  ${answer}
`;

export const Answer = styled.Text`
  ${answer}
  margin-left: 8px;
  font-style: italic;
`;

export const Question = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
`;

export const ListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ListHeaderTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: gray;
`;

export const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 85,
  },
});
