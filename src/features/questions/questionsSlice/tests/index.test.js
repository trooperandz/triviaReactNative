import reducer, {
  clearQuestionSliceState,
  updateTriviaQuestion,
  receiveTriviaQuestions,
} from '../index';

const mockQuestions = [
  {
    question: 'one',
    selected_answer: '',
  },
  {
    question: 'two',
    selected_answer: '',
  },
  {
    question: 'three',
    selected_answer: '',
  },
];

describe('questionsSlice', () => {
  it('should receive and set the trivia questions properly', () => {
    const state = { questions: [] };

    const newState = reducer(
      state,
      receiveTriviaQuestions({ questions: mockQuestions }),
    );

    expect(newState).toEqual({ questions: mockQuestions });
  });

  it('should update the trivia questions correctly', () => {
    const state = { questions: mockQuestions };
    const newState = reducer(
      state,
      updateTriviaQuestion({
        index: 1,
        value: 'test update',
      }),
    );

    expect(newState.questions[1].selected_answer).toEqual('test update');
  });

  it('should clear out the questions state correctly', () => {
    const state = { questions: mockQuestions };
    const newState = reducer(state, clearQuestionSliceState());

    expect(newState).toEqual({ questions: [] });
  });
});
