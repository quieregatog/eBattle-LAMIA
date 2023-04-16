import { toast } from "react-toastify";

interface IToast {
  message: string;
  type: "error" | "warning" | "success";
}

export const TypesMessage = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  warning: (message: string) => toast.warning(message),
};

export const useToast = () => {
  const activeToast = ({ message, type }: IToast) => {
    TypesMessage[type](message);
  };

  return { activeToast };
};
