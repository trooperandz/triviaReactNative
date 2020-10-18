export type RadioOption = {
  value: string | number;
  title: string;
  selected_answer?: string;
};

export type RadioGroupProps = {
  options: RadioOption[];
  onSelect: Function;
  questionIndex?: number;
};
