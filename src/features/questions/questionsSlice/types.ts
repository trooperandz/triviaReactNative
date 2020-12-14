export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  selected_answer?: string;
};

export type QuestionsSliceState = {
  questions: {
    questions: Array<Question>;
  };
};
