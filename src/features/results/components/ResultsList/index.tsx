import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AllHtmlEntities } from 'html-entities';
import { Icon } from 'react-native-eva-icons';

import { Question } from 'features/questions/questionsSlice/types';
import { AppSliceState } from 'features/app/appSlice/types';
import { ResultsListProps } from './types';

import * as S from './styles';

export const CHECKMARK_ICON_TEST_ID = 'checkmark-icon';
export const CORRECT_ANSWER_TEST_ID = 'correct-answer';
export const MINUS_ICON_TEST_ID = 'minus-icon';
export const RESULTS_CARD_TEST_ID = 'results-card';

const { styles } = S;
const entities = new AllHtmlEntities();
const CheckMarkIcon = () => (
  <View testID={CHECKMARK_ICON_TEST_ID}>
    <Icon
      name="checkmark-circle-2-outline"
      width={32}
      height={32}
      fill="#329999"
    />
  </View>
);
const MinusIcon = () => (
  <View testID={MINUS_ICON_TEST_ID}>
    <Icon name="minus-circle-outline" width={32} height={32} fill="#993232" />
  </View>
);

export const ResultsList = (props: ResultsListProps) => {
  const { questions } = props;

  const userName = useSelector((state: AppSliceState) => state.app.userName);

  const totalCorrectCount = questions.reduce(
    (correctCount: number, question: Question) => {
      if (question.selected_answer === question.correct_answer) {
        correctCount += 1;
      }

      return correctCount;
    },
    0,
  );

  const renderCard = ({ item, index }: { item: Question; index: number }) => {
    const questionNumber = index + 1;
    const isAnswerCorrect = item.correct_answer === item.selected_answer;

    return (
      <S.Card testID={RESULTS_CARD_TEST_ID}>
        <S.CardHeader>
          {isAnswerCorrect ? <CheckMarkIcon /> : <MinusIcon />}
          <S.Status>{isAnswerCorrect ? 'Correct' : 'Incorrect'}</S.Status>
        </S.CardHeader>
        <S.CardBody>
          <S.Question>
            {questionNumber}. {entities.decode(item.question)}
          </S.Question>
          <S.AnswerWrapper>
            <S.AnswerTitle>Your answer:</S.AnswerTitle>
            <S.Answer>
              {entities.decode(item.selected_answer as string)}
            </S.Answer>
          </S.AnswerWrapper>
          <S.AnswerWrapper>
            {!isAnswerCorrect ? (
              <>
                <S.AnswerTitle>Correct Answer:</S.AnswerTitle>
                <S.Answer testID={CORRECT_ANSWER_TEST_ID}>
                  {entities.decode(item.correct_answer)}
                </S.Answer>
              </>
            ) : null}
          </S.AnswerWrapper>
        </S.CardBody>
      </S.Card>
    );
  };

  return (
    <FlatList
      data={questions}
      renderItem={renderCard}
      keyExtractor={(item) => item.correct_answer}
      ListHeaderComponent={() => (
        <S.ListHeader>
          <S.ListHeaderTitle>
            {`${userName}, you got ${totalCorrectCount} / ${questions.length} correct`}
          </S.ListHeaderTitle>
        </S.ListHeader>
      )}
      contentContainerStyle={styles.list}
    />
  );
};
