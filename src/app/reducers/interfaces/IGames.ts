import IBaseReducer from "./IBase";

export interface IGamesReducer extends IBaseReducer {
  games: IGames | undefined;
}

interface IGames {
  name: string;
  category: number;
  language: number;
  questions: IQuestions[];
}

interface IQuestions {
  text: string;
  answers: string[];
  answer: number;
  time: number;
  img: string;
}
