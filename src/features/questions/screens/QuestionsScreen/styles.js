import styled from 'styled-components/native';

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
  /* flex-direction: row; */
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
