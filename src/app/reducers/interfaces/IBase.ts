interface IBaseReducer {
  loading: boolean;
  message: IMessage;
}

interface IMessage {
  msg: string | undefined;
  code: number;
  isError: boolean;
}

export default IBaseReducer;
