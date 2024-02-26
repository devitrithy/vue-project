export enum validated {
  start,
  validated,
  not_validated,
}
export type InputField = {
  titles: string;
  value: string;
  validate: validated;
  message: string;
};
export interface Form {
  name: InputField;
  email: InputField;
  telegram: InputField;
  description: InputField;
}
