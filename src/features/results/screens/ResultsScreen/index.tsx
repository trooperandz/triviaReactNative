import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SafeArea } from 'components/SafeArea';
import { Header } from 'components/Header';
import { FadeInView } from 'components/FadeInView';
import { ResultsList } from '../../components/ResultsList';
import { Button } from 'components/Button';
import { resetGame } from 'features/app/appSlice';
import { ResultsScreenProps } from './types';
import { QuestionsSliceState } from 'features/questions/questionsSlice/types';
import * as S from './styles';

const { styles } = S;

export const ResultsScreen = (props: ResultsScreenProps) => {
  const { navigation } = props;

  const questions = useSelector(
    (state: QuestionsSliceState) => state.questions.questions,
  );
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(resetGame());
    navigation.navigate('Home');
  };

  return (
    <SafeArea>
      <>
        <Header />
        <S.Container>
          <FadeInView>
            <ResultsList questions={questions} />
          </FadeInView>
        </S.Container>
        <Button type="primary" style={styles.button} onPress={handlePlayAgain}>
          Play Again
        </Button>
      </>
    </SafeArea>
  );
};
