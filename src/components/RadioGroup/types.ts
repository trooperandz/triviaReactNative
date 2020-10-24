export type RadioOption = {
  title: string;
  value: string;
  selected_answer?: boolean | string | '';
};

export type RadioGroupProps = {
  options: RadioOption[];
  onSelect: Function;
  questionIndex?: number;
};
