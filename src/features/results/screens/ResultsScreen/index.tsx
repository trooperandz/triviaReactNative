import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from 'components/Header';
import { FadeInView } from 'components/FadeInView';
import { ResultsList } from '../../components/ResultsList';
import { Button } from 'components/Button';
import { resetGame } from 'features/app/appSlice';
import { AppSliceState } from 'features/app/types';
import { ResultsScreenProps } from './types';
import { Question, QuestionsSliceState } from 'features/questions/types';
import * as S from './styles';

const { styles } = S;

export const ResultsScreen = (props: ResultsScreenProps) => {
  const { navigation } = props;

  const userName = useSelector((state: AppSliceState) => state.app.userName);
  const questions = useSelector(
    (state: QuestionsSliceState) => state.questions.questions,
  );
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(resetGame());
    navigation.navigate('Home');
  };

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
      <S.Container>
        <S.Title>
          {`${userName}, you got ${totalCorrectCount} / ${questions.length} correct`}
        </S.Title>
        <FadeInView>
          <ResultsList questions={questions} />
        </FadeInView>
      </S.Container>
      <Button type="primary" style={styles.button} onPress={handlePlayAgain}>
        Play Again
      </Button>
    </>
  );
};
