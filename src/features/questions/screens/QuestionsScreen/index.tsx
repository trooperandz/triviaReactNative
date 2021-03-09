import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-eva-icons';
import { AllHtmlEntities } from 'html-entities';

import { SafeArea } from 'components/SafeArea';
import { Header } from 'components/Header';
import { FadeInView } from 'components/FadeInView';
import { RadioGroup } from 'components/RadioGroup';
import { Button } from 'components/Button';

import { updateSelectedAnswer } from 'features/questions/questionsSlice';
import { Question, QuestionsSliceState } from '../../questionsSlice/types';
import { QuestionsScreenProps } from './types';

import * as GS from 'styles';
import * as S from './styles';

const { styles } = S;

export const QUESTION_SCREEN_TEST_ID = 'question-screen';
export const PAGINATION_DOT_TEST_ID = 'pagination-dot';

const entities = new AllHtmlEntities();
const RightArrowIcon = () => (
  <Icon name="chevron-right-outline" width={32} height={32} fill="#fff" />
);
const LeftArrowIcon = () => (
  <Icon name="chevron-left-outline" width={32} height={32} fill="#fff" />
);

export const QuestionsScreen = (props: QuestionsScreenProps) => {
  const { navigation } = props;

  const [pageIndex, setPageIndex] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const dispatch = useDispatch();
  const scrollContainerRef = useRef<ScrollView>(null);
  const { width, height } = Dimensions.get('window');

  const questions = useSelector(
    (state: QuestionsSliceState) => state.questions.questions,
  );

  const setSliderPage = (e: any) => {
    const { x } = e.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);

    if (indexOfNextScreen !== pageIndex) {
      setPageIndex(indexOfNextScreen);
    }
  };

  const handleNextPress = () => {
    if (pageIndex < questions.length - 1 && scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({ x: width * (pageIndex + 1) });
    }
  };

  const handlePreviousPress = () => {
    if (pageIndex > 0 && scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({ x: width * (pageIndex - 1) });
    }
  };

  const handleNavigationBackPress = () => navigation.navigate('Home');

  const onSelect = (value: string, index: number) => {
    if (totalAnswered < questions.length) {
      setTotalAnswered(totalAnswered + 1);
    }

    dispatch(
      updateSelectedAnswer(index, value, () =>
        setTimeout(handleNextPress, 850),
      ),
    );
  };

  return (
    <SafeArea>
      <>
        <Header backOption onPress={handleNavigationBackPress} />
        <ScrollView
          style={styles.scrollWrapper}
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
              return {
                title: item.toUpperCase(),
                value: item,
                selected_answer: question.selected_answer === item ? item : '',
              };
            });

            return (
              <S.QuestionContainer
                testID={QUESTION_SCREEN_TEST_ID}
                width={width}
                height={height}
                key={i}>
                <GS.ScreenContainer>
                  <S.QuestionWrapper>
                    <S.Question>
                      {entities.decode(question.question)}
                    </S.Question>
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
        </ScrollView>
        {totalAnswered === questions.length ? (
          <FadeInView duration={800} style={styles.buttonWrapper}>
            <Button
              type="secondary"
              style={styles.button}
              onPress={() => navigation.navigate('Results')}>
              Submit
            </Button>
          </FadeInView>
        ) : null}
        {pageIndex > 0 ? (
          <S.LeftButton onPress={handlePreviousPress}>
            <LeftArrowIcon />
          </S.LeftButton>
        ) : null}
        {pageIndex < questions.length - 1 ? (
          <S.RightButton onPress={handleNextPress}>
            <RightArrowIcon />
          </S.RightButton>
        ) : null}
        <S.PaginationWrapper>
          {questions.map((question: Question, index: number) => (
            <S.PaginationDot
              key={index}
              isCurrentQuestion={index === pageIndex}
              isAnswered={question.selected_answer ? true : false}
              testID={PAGINATION_DOT_TEST_ID}
            />
          ))}
        </S.PaginationWrapper>
      </>
    </SafeArea>
  );
};
