import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AllHtmlEntities } from 'html-entities';

import { RadioGroup } from 'components/RadioGroup';
import { updateTriviaQuestions } from 'features/questions/questionsSlice';
import { Question } from '../../types';
import * as GS from 'styles';
import * as S from './styles';

const entities = new AllHtmlEntities();

export const QuestionsScreen = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const dispatch = useDispatch();
  const scrollContainerRef = useRef<ScrollView>(null);
  const { width, height } = Dimensions.get('window');

  const questions = useSelector((state: any) => state.questions.questions);

  const setSliderPage = (e: any) => {
    const { x } = e.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);

    if (indexOfNextScreen !== pageIndex) {
      setPageIndex(indexOfNextScreen);
    }
  };

  const handleNexPress = () => {
    if (pageIndex < questions.length - 1 && scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({ x: width * (pageIndex + 1) });
    }
  };

  const onSelect = (value: string, index: number) => {
    dispatch(
      updateTriviaQuestions({
        index,
        value,
        callback: setTimeout(handleNexPress, 850),
      }),
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollContainer
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        ref={scrollContainerRef}
        showsHorizontalScrollIndicator={false}
        onScroll={setSliderPage}>
        {questions.map((question: Question, i: number) => {
          const options = [
            ...question.incorrect_answers,
            question.correct_answer,
          ].map((item) => {
            console.log('selected_answer: ', question.selected_answer);
            console.log('boolean test: ', question.selected_answer === item);
            return {
              title: item.toUpperCase(),
              value: item,
              selected_answer: question.selected_answer === item ? item : '',
            };
          });
          console.log({ options });
          return (
            <S.QuestionContainer width={width} height={height} key={i}>
              <GS.ScreenContainer>
                <S.QuestionWrapper>
                  <S.Question>{entities.decode(question.question)}</S.Question>
                  <RadioGroup
                    onSelect={onSelect}
                    options={options}
                    questionIndex={i}
                  />
                </S.QuestionWrapper>
              </GS.ScreenContainer>
            </S.QuestionContainer>
          );
        })}
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
