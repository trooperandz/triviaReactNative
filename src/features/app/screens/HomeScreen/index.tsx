import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import SplashScreen from 'react-native-splash-screen';

import { RadioGroup } from 'components/RadioGroup';
import { Button } from 'components/Button';
import { TextInput } from 'components/TextInput';
import { getTriviaQuestions } from 'features/questions/questionsSlice';
import * as S from './styles';
import * as GS from 'styles';

const { styles } = S;

const defaultRadioOptions = [
  {
    title: 'General Knowledge',
    value: '9',
  },
  {
    title: 'Science & Nature',
    value: '17',
  },
  {
    title: 'Mythology',
    value: '20',
  },
  {
    title: 'Sports',
    value: '21',
  },
  {
    title: 'Animals',
    value: '27',
  },
];

const questionCountOptions = ['5', '10', '15', '20'];
const difficultyLevelOptions = ['easy', 'medium', 'hard'];

const HomeScreen = (props) => {
  const { navigation } = props;

  const [questionCount, setQuestionCount] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [radioOptions, setRadioOptions] = useState(defaultRadioOptions);
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  console.log('test');
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3500);
  }, []);

  const handleOnPressSubmit = () => {
    setIsLoading(true);
    const requestParams = {
      amount: questionCountOptions[questionCount],
      category,
      difficulty: difficultyLevelOptions[difficultyLevel],
    };

    dispatch(
      getTriviaQuestions(requestParams, () => {
        navigation.navigate('Questions');
        setIsLoading(false);
      }),
    );
  };

  const handleOnPressRadio = (value: string, index: number) => {
    console.log({ value, index });
    const newOptions = [...radioOptions];
    newOptions.map((option) => (option.selected_answer = ''));
    newOptions[index].selected_answer = value;
    setRadioOptions(newOptions);
  };

  const handleOnChangeText = (text) => {
    console.log({ text });
  };

  return (
    <S.ScrollContainer contentContainerStyle={styles.contentContainerStyle}>
      <GS.ScreenContainer style={styles.screenContainer}>
        <View>
          <GS.Heading>Select Your Trivia</GS.Heading>

          <S.FormLabel>First Name</S.FormLabel>
          <TextInput onChangeText={handleOnChangeText} />
          <S.Spacer size={16} />

          <S.FormLabel>Total Questions</S.FormLabel>
          <SegmentedControl
            values={questionCountOptions}
            selectedIndex={questionCount}
            activeTextColor="#51a7f9"
            onChange={(event) =>
              setQuestionCount(event.nativeEvent.selectedSegmentIndex)
            }
          />
          <S.Spacer size={20} />

          <S.FormLabel>Select Category</S.FormLabel>
          <RadioGroup onSelect={handleOnPressRadio} options={radioOptions} />
          <S.Spacer size={20} />

          <S.FormLabel>Difficulty Level</S.FormLabel>
          <SegmentedControl
            values={difficultyLevelOptions}
            selectedIndex={difficultyLevel}
            activeTextColor="#51a7f9"
            onChange={(event) =>
              setDifficultyLevel(event.nativeEvent.selectedSegmentIndex)
            }
          />
        </View>
        <View>
          <S.Spacer size={32} />
          <Button
            type="primary"
            onPress={handleOnPressSubmit}
            style={styles.button}>
            {isLoading ? (
              <ActivityIndicator
                style={{ marginTop: 6 }}
                size="large"
                color="#fff"
              />
            ) : (
              'Begin'
            )}
          </Button>
        </View>
      </GS.ScreenContainer>
    </S.ScrollContainer>
  );
};

export default HomeScreen;