import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-eva-icons';
import { AllHtmlEntities } from 'html-entities';

import { Header } from 'components/Header';
import { FadeInView } from 'components/FadeInView';
import { RadioGroup } from 'components/RadioGroup';
import { Button } from 'components/Button';
import { updateSelectedAnswer } from 'features/questions/questionsSlice';
import { Question } from '../../types';
import { QuestionsScreenProps } from './types';
import * as GS from 'styles';
import * as S from './styles';

const { styles } = S;

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

  const questions = useSelector((state: any) => state.questions.questions);

  const setSliderPage = (e: any) => {
    const { x } = e.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);

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

  const handleNavigationPress = () => navigation.navigate('Home');

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

  const handleOnSubmit = () => navigation.navigate('Results');

  return (
    <>
      <Header backOption onPress={handleNavigationPress} />
      <StatusBar barStyle="dark-content" />
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
      </ScrollView>
      {totalAnswered === questions.length ? (
        <FadeInView style={styles.buttonWrapper}>
          <Button
            type="secondary"
            style={styles.button}
            onPress={handleOnSubmit}>
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
            currentIndex={index}
            pageIndex={pageIndex}
          />
        ))}
      </S.PaginationWrapper>
    </>
  );
};
