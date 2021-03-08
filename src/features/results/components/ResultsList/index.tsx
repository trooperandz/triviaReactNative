import React from 'react';
import { FlatList, View } from 'react-native';
import { AllHtmlEntities } from 'html-entities';
import { Icon } from 'react-native-eva-icons';

import { Question } from 'features/questions/questionsSlice/types';
import { ResultsListProps } from './types';
import * as S from './styles';

const { styles } = S;
const entities = new AllHtmlEntities();
const CheckMarkIcon = () => (
  <View testID="checkmark-icon">
    <Icon
      name="checkmark-circle-2-outline"
      width={32}
      height={32}
      fill="#329999"
    />
  </View>
);
const MinusIcon = () => (
  <View testID="minus-icon">
    <Icon name="minus-circle-outline" width={32} height={32} fill="#993232" />
  </View>
);

export const ResultsList = (props: ResultsListProps) => {
  const { questions } = props;

  const renderCard = ({ item, index }: { item: Question; index: number }) => {
    const questionNumber = index + 1;
    const isAnswerCorrect = item.correct_answer === item.selected_answer;

    return (
      <S.Card testID="results-card">
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
                <S.Answer testID="correct-answer">
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
      contentContainerStyle={styles.list}
    />
  );
};
