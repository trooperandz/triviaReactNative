import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import SplashScreen from 'react-native-splash-screen';

import { RadioGroup } from 'components/RadioGroup';
import { Button } from 'components/Button';
import { TextInput } from 'components/TextInput';
import { FormLabel, Spacer } from './styles';
import { styles as globalStyles } from 'styles';

const radioOptions = [
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

export const HomeScreen = (props) => {
  const { navigation } = props;

  const [questionCount, setQuestionCount] = useState(5);
  const [difficultyLevel, setDifficultyLevel] = useState(5);
  const [category, setCategory] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3500);
  }, []);

  const testData = useSelector((state) => state.test);

  const handleSetQuestions = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigation.navigate('Questions');
      // setIsLoading(false);
    }, 2000);
  };

  const handleOnChangeText = (text) => {
    console.log({ text });
  };

  console.log({ testData });
  return (
    <View style={[globalStyles.container, { justifyContent: 'space-between' }]}>
      <View>
        <Text style={globalStyles.heading}>Select Your Trivia</Text>

        <FormLabel>Your Name</FormLabel>
        <TextInput onChangeText={handleOnChangeText} />
        <Spacer size={20} />

        <FormLabel>Total Questions</FormLabel>
        <SegmentedControl
          values={['5', '10', '15', '20']}
          selectedIndex={questionCount}
          activeTextColor="#51a7f9"
          onChange={(event) =>
            setQuestionCount(event.nativeEvent.selectedSegmentIndex)
          }
        />
        <Spacer size={20} />

        <FormLabel>Select Category</FormLabel>
        <RadioGroup
          selectedValue={category}
          onSelect={setCategory}
          options={radioOptions}
        />
        <Spacer size={20} />

        <FormLabel>Difficulty Level</FormLabel>
        <SegmentedControl
          values={['Easy', 'Medium', 'Hard']}
          selectedIndex={difficultyLevel}
          activeTextColor="#51a7f9"
          onChange={(event) =>
            setDifficultyLevel(event.nativeEvent.selectedSegmentIndex)
          }
        />
      </View>
      <View>
        <Button onPress={handleSetQuestions}>
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
    </View>
  );
};
