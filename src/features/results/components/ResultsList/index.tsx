import React from 'react';
import { Text, FlatList } from 'react-native';

import { Question } from 'features/questions/types';
import { ResultsListProps } from './types';
import * as S from './styles';

const { styles } = S;

export const ResultsList = (props: ResultsListProps) => {
  const { questions } = props;

  const renderCard = ({ item, index }: { item: Question; index: number }) => {
    const questionNumber = index + 1;
    const isAnswerCorrect = item.question === item.selected_answer;

    return (
      <S.Card>
        <Text>{isAnswerCorrect ? 'Correct' : 'Incorrect'}</Text>
        <Text>
          {questionNumber}. {item.question}
        </Text>
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
