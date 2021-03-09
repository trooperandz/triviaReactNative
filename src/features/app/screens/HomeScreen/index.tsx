import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput as Input, View } from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import SplashScreen from 'react-native-splash-screen';

import { SafeArea } from 'components/SafeArea';
import { Header } from 'components/Header';
import { FadeInView } from 'components/FadeInView';
import { RadioGroup } from 'components/RadioGroup';
import { Button } from 'components/Button';
import { TextInput } from 'components/TextInput';

import { getTriviaQuestions } from 'features/questions/questionsSlice';
import { setGlobalError, setUserName } from 'features/app/appSlice';
import {
  defaultRadioOptions,
  questionCountOptions,
  difficultyLevelOptions,
} from '../../utils';
import { RadioOption } from 'components/RadioGroup/types';
import { FormErrors } from './types';

import * as S from './styles';
import * as GS from 'styles';
import colors from 'styles/colors';

const { styles } = S;

export const ERROR_CATEGORY_TEST_ID = 'error-category';
export const ERROR_NAME_TEST_ID = 'error-name';

export const HomeScreen = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [userFirstName, setUserFirstName] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [radioOptions, setRadioOptions] = useState<RadioOption[]>(
    defaultRadioOptions,
  );

  const dispatch = useDispatch();
  const inputRef = useRef<Input>(null);

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3500);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleOnPressSubmit = () => {
    setIsLoading(true);
    let newErrors: FormErrors = {};
    setFormErrors({ ...newErrors });

    if (!userFirstName || !/^[a-zA-Z]+$/.test(userFirstName)) {
      newErrors.userFirstName = 'Enter a valid first name';
    }

    if (!category) {
      newErrors.category = 'Select a category';
    }

    if (Object.keys(newErrors).length) {
      setIsLoading(false);
      setFormErrors({ ...newErrors });
      dispatch(setGlobalError('Please enter all form fields!'));
      return;
    }

    const requestParams = {
      amount: questionCountOptions[questionCount],
      category,
      difficulty: difficultyLevelOptions[difficultyLevel],
    };

    dispatch(setUserName({ userName: userFirstName }));
    dispatch(
      getTriviaQuestions(requestParams, () => {
        setIsLoading(false);
      }),
    );
  };

  const handleOnPressRadio = (value: string, index: number) => {
    const newOptions = [...radioOptions];
    newOptions.map((option) => (option.selected_answer = ''));
    newOptions[index].selected_answer = value;
    setRadioOptions(newOptions);
    setCategory(value);
  };

  const handleOnChangeText = (text: string) => {
    setUserFirstName(text);
  };

  return (
    <SafeArea>
      <>
        <Header />
        <S.ScrollContainer contentContainerStyle={styles.contentContainerStyle}>
          <GS.ScreenContainer style={styles.screenContainer}>
            <FadeInView duration={400}>
              <>
                <View>
                  <GS.Heading>Select Your Trivia</GS.Heading>

                  <S.LabelWrapper>
                    <S.FormLabel>First Name</S.FormLabel>
                    {formErrors.userFirstName ? (
                      <S.Error testID={ERROR_NAME_TEST_ID}>
                        {formErrors.userFirstName}
                      </S.Error>
                    ) : null}
                  </S.LabelWrapper>
                  <TextInput
                    ref={inputRef}
                    onChangeText={handleOnChangeText}
                    hasError={formErrors.userFirstName}
                  />
                  <S.Spacer size={16} />

                  <S.FormLabel>Total Questions</S.FormLabel>
                  <SegmentedControl
                    values={questionCountOptions}
                    selectedIndex={questionCount}
                    activeTextColor={colors.primary}
                    onChange={(event) =>
                      setQuestionCount(event.nativeEvent.selectedSegmentIndex)
                    }
                  />
                  <S.Spacer size={20} />
                  <S.LabelWrapper>
                    <S.FormLabel>Select Category</S.FormLabel>
                    {formErrors.category ? (
                      <S.Error testID={ERROR_CATEGORY_TEST_ID}>
                        {formErrors.category}
                      </S.Error>
                    ) : null}
                  </S.LabelWrapper>
                  <RadioGroup
                    onSelect={handleOnPressRadio}
                    options={radioOptions}
                  />
                  <S.Spacer size={20} />

                  <S.FormLabel>Difficulty Level</S.FormLabel>
                  <SegmentedControl
                    values={difficultyLevelOptions}
                    selectedIndex={difficultyLevel}
                    activeTextColor={colors.primary}
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
                    style={styles.button}
                    isLoading={isLoading}>
                    Begin
                  </Button>
                </View>
              </>
            </FadeInView>
          </GS.ScreenContainer>
        </S.ScrollContainer>
      </>
    </SafeArea>
  );
};
