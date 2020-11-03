import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import { Header } from 'components/Header';
import { ResultsList } from '../../components/ResultsList';
import { Button } from 'components/Button';
import { Question } from 'features/questions/types';
import { ResultsScreenProps } from './types';
import * as S from './styles';

const { styles } = S;

export const ResultsScreen = (props: ResultsScreenProps) => {
  const { navigation } = props;
  const userName = useSelector((state: any) => state.app.userName);
  const questions = useSelector((state: any) => state.questions.questions);

  const handlePlayAgain = () => navigation.navigate('Home');

  const totalCorrectCount = questions.reduce(
    (correctCount: number, question: Question) => {
      if (question.selected_answer === question.correct_answer) {
        correctCount += 1;
      }

      return correctCount;
    },
    0,
  );

  return (
    <>
      <Header />
      <ScrollView>
        <S.Container>
          <S.Title>
            {`${userName}, you got ${totalCorrectCount} / ${questions.length} correct`}
          </S.Title>
          <ResultsList questions={questions} />
        </S.Container>
      </ScrollView>
      <Button type="primary" style={styles.button} onPress={handlePlayAgain}>
        Play Again
      </Button>
    </>
  );
};
