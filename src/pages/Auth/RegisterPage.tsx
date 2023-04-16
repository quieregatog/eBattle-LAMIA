/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchLoginAuthReducer,
  fetchRegisterAuthReducer,
} from "../../app/reducers/Api/Auth/thunk";
import { useDispatchApp, RootState } from "../../app/types";
import { FormRegister } from "../../components/Forms/FormRegister";
import NavBar from "../../components/NavBar";
import { useHookForm } from "../../hook/useFormData";
import { useToast } from "../../hook/useToast";
import { PageStyled } from "../styled";
import { PageLoginStyled } from "./styled";

export const RegisterPage = () => {
  const { dataHook, handleSetData } = useHookForm();
  const navigate = useNavigate();
  const dispatch = useDispatchApp();
  const { activeToast } = useToast();
  const {
    authSlice: { message, isLogged },
  } = useSelector((state: RootState) => state);

  const handleSubmit = () => {
    if (dataHook) {
      const { check_password, ...userRegister } = dataHook;
      if (dataHook.password === check_password) {
        dispatch(fetchRegisterAuthReducer(userRegister));
      }
    }
  };

  const handleLogin = () => {
    if (dataHook && message.code === 200) {
      dispatch(
        fetchLoginAuthReducer({
          email: dataHook.email,
          password: dataHook.password,
        })
      );
    }
  };

  useEffect(() => {
    const { msg } = message;

    if (message.isError && msg) activeToast({ message: msg, type: "error" });
    if (!message.isError && msg) {
      handleLogin();
    }
    if (!message.isError && isLogged && msg) {
      activeToast({ message: msg, type: "success" });
      navigate("/games", { replace: true });
    }
  }, [message.msg, message.isError, message]);

  return (
    <PageStyled>
      <NavBar />
      <PageLoginStyled>
        <FormRegister handleSetData={handleSetData} onSubmit={handleSubmit} />
      </PageLoginStyled>
    </PageStyled>
  );
};
