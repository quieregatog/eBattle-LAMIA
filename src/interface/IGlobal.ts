export interface IGlobalAttributes {
  className?: string;
  id?: string;
}

export interface IGlobalAlternative extends IGlobalAttributes {
  children?: JSX.Element;
}

export interface IStyledComponents {
  backgroundColor?: string;
  backgroundImage?: string;
  width?: string;
  height?: string;
  active?: boolean;
}
