import { useState } from "react";

export const useHookForm = () => {
  const [dataHook, setDataHook] = useState<any>({});

  const handleSetData = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDataHook({ ...dataHook, [name]: value });
  };

  return { dataHook, handleSetData };
};
