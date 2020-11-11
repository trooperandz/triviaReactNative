import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from 'components/Header';
import { ResultsList } from '../../components/ResultsList';
import { Button } from 'components/Button';
import { clearAppSliceState, setIsGameCompleted } from 'features/app/appSlice';
import { clearQuestionSliceState } from 'features/questions/questionsSlice';
import { AppSliceState } from 'features/app/types';
import { Question, QuestionsSliceState } from 'features/questions/types';
import * as S from './styles';

const { styles } = S;

export const ResultsScreen = () => {
  const userName = useSelector((state: AppSliceState) => state.app.userName);
  const questions = useSelector(
    (state: QuestionsSliceState) => state.questions.questions,
  );
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(clearAppSliceState());
    dispatch(clearQuestionSliceState());
    dispatch(setIsGameCompleted(false));
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
        <ResultsList questions={questions} />
      </S.Container>
      <Button type="primary" style={styles.button} onPress={handlePlayAgain}>
        Play Again
      </Button>
    </>
  );
};
