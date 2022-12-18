export type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
  onChangeText?: (text: string) => void;
};

export type ButtonProps = {
  label: string;
  bg?: string;
  color?: string;
  onPress?: () => void;
};

export interface ILoginData {
  username: string;
  password: string;
}

export enum InputType {
  text = "text",
  email = "email",
  password = "password",
}
