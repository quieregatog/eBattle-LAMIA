export interface IGlobalAttributes {
  className?: string;
  id?: string;
  width?: string;
  height?: string;
  color?: string;
  children?: any;
  htmlFor?: string;
}

export interface IGlobalAlternative extends IGlobalAttributes {
  children?: JSX.Element;
}

export interface IStyledComponents {
  margin?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  active?: boolean;
  typeBord?: string;
}
