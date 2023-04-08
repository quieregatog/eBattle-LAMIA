export interface IGlobalAttributes {
  className?: string;
  id?: string;
}

export interface IGlobalAlternative extends IGlobalAttributes {
  children?: JSX.Element;
}

export interface IStyledComponents {
  margin?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  width?: string;
  height?: string;
  active?: boolean;
}
