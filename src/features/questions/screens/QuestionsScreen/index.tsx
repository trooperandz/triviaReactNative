import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import { Question } from '../../types';
import * as GS from 'styles';
import * as S from './styles';

export const QuestionsScreen = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { width, height } = Dimensions.get('window');

  const questions = useSelector((state: any) => state.questions.questions);
  console.log({ questions });
  const setSliderPage = (e: any) => {
    const { x } = e.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);

    if (indexOfNextScreen !== pageIndex) {
      setPageIndex(indexOfNextScreen);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollContainer
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={setSliderPage}>
        {questions.map((question: Question) => (
          <S.QuestionContainer width={width} height={height}>
            <GS.ScreenContainer>
              <S.QuestionWrapper>
                <S.Question>{question.question}</S.Question>
              </S.QuestionWrapper>
            </GS.ScreenContainer>
          </S.QuestionContainer>
        ))}
      </ScrollContainer>
      <S.PaginationWrapper>
        {questions.map((key, index: number) => (
          <S.PaginationDot
            key={index}
            currentIndex={index}
            pageIndex={pageIndex}
          />
        ))}
      </S.PaginationWrapper>
    </>
  );
};

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;
