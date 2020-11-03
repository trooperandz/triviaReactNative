import React from 'react';
import { FlatList } from 'react-native';
import { AllHtmlEntities } from 'html-entities';
import { Icon } from 'react-native-eva-icons';

import { Question } from 'features/questions/types';
import { ResultsListProps } from './types';
import * as S from './styles';

const { styles } = S;
const entities = new AllHtmlEntities();
const CheckMarkIcon = () => (
  <Icon
    name="checkmark-circle-2-outline"
    width={32}
    height={32}
    fill="#329999"
  />
);
const MinusIcon = () => (
  <Icon name="minus-circle-outline" width={32} height={32} fill="#993232" />
);

export const ResultsList = (props: ResultsListProps) => {
  const { questions } = props;

  const renderCard = ({ item, index }: { item: Question; index: number }) => {
    const questionNumber = index + 1;
    const isAnswerCorrect = item.correct_answer === item.selected_answer;

    return (
      <S.Card>
        <S.CardHeader>
          {isAnswerCorrect ? <CheckMarkIcon /> : <MinusIcon />}
          <S.Status>{isAnswerCorrect ? 'Correct' : 'Incorrect'}</S.Status>
        </S.CardHeader>
        <S.CardBody>
          <S.Question>
            {questionNumber}. {entities.decode(item.question)}
          </S.Question>
          <S.Answer>
            Your answer: {entities.decode(item.selected_answer as string)}
          </S.Answer>
          <S.Answer>
            {!isAnswerCorrect
              ? `Correct Answer: ${entities.decode(item.correct_answer)}`
              : null}
          </S.Answer>
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
