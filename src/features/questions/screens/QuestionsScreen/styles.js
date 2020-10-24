import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

const navigationButtonStyle = css`
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 42px;
  width: 42px;
  background-color: #51a7f9;
  border-radius: 24px;
  border-width: 1px;
  border-color: #51a7f9;
  bottom: 50px;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const QuestionContainer = styled.View.attrs((props) => ({
  height: props.height,
  width: props.width,
}))`
  background-color: #fff;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const QuestionWrapper = styled.View`
  flex: 1;
`;

export const PaginationWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const PaginationDot = styled.View.attrs((props) => ({
  currentIndex: props.currentIndex,
  pageIndex: props.pageIndex,
}))`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #0898a0;
  margin-left: 10px;
  opacity: ${(props) => (props.pageIndex === props.currentIndex ? 1 : 0.2)};
`;

export const Question = styled.Text`
  flex-wrap: wrap;
  font-size: 20px;
  margin-bottom: 24px;
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
    backgroundColor: '#fff',
    borderColor: '#51a7f9',
    borderWidth: 1.5,
  },
});
