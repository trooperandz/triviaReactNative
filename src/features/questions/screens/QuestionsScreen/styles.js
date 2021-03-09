import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

import colors from 'styles/colors';

const navigationButtonStyle = css`
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 42px;
  width: 42px;
  background-color: ${colors.buttonPrimary};
  border-radius: 24px;
  border-width: 1px;
  border-color: ${colors.buttonPrimary};
  bottom: 50px;
`;

export const QuestionContainer = styled.View.attrs((props) => ({
  height: props.height,
  width: props.width,
}))`
  background-color: ${colors.backgroundPrimary};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const QuestionWrapper = styled.View`
  flex: 1;
`;

export const PaginationWrapper = styled.View`
  position: absolute;
  bottom: 35px;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const PaginationDot = styled.View.attrs((props) => ({
  isCurrentQuestion: props.isCurrentQuestion,
  isAnswered: props.isAnswered,
}))`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isAnswered ? colors.textSecondary : colors.surfaceSecondary};
  border: ${(props) =>
    props.isAnswered ? 'none' : `2px solid ${colors.textSecondary}`};
  margin-left: 10px;
  opacity: ${(props) => (props.isCurrentQuestion ? 0.7 : 0.2)};
`;

export const Question = styled.Text`
  flex-wrap: wrap;
  font-size: 20px;
  margin-bottom: 24px;
  color: ${colors.textPrimary};
`;

export const RightButton = styled.TouchableOpacity`
  ${navigationButtonStyle}
  right: 24px;
`;

export const LeftButton = styled.TouchableOpacity`
  ${navigationButtonStyle}
  left: 24px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  width: 160px;
  align-self: center;
  margin-top: 32px;
`;

export const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    flex: 1,
    width: 160,
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 120,
    height: 40,
    padding: 0,
    marginBottom: 0,
    backgroundColor: colors.buttonSecondary,
    borderColor: colors.primary,
    borderWidth: 1.5,
  },
});
