export type RadioOption = {
  value: string | number;
  title: string;
};

export type RadioGroupProps = {
  options: RadioOption[];
  onSelect: Function;
  selectedValue: number | string | undefined;
};
