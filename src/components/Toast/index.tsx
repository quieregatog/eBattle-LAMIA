import { ToastContainer } from "react-toastify";
import { IGlobalAttributes } from "../../interface/IGlobal";
import "react-toastify/dist/ReactToastify.css";

export const Toast: React.FC<IGlobalAttributes> = ({ ...props }) => {
  return (
    <ToastContainer
      {...props}
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
