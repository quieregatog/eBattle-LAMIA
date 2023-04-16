/* eslint-disable react-hooks/exhaustive-deps */
import { fetchLoginAuthReducer } from "../../app/reducers/Api/Auth/thunk";
import { RootState, useDispatchApp } from "../../app/types";
import { UnsplashComponent } from "../../components/Details/Unsplash";
import { FormLogin } from "../../components/Forms/FormLogin";
import NavBar from "../../components/NavBar";
import { useToast } from "../../hook/useToast";
import { useHookForm } from "../../hook/useFormData";
import { PageStyled } from "../styled";
import { PageLoginStyled } from "./styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { dataHook, handleSetData } = useHookForm();
  const dispatch = useDispatchApp();
  const { activeToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (dataHook) {
      dispatch(fetchLoginAuthReducer(dataHook));
    }
  };

  const {
    authSlice: { message },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    const { msg } = message;

    if (message.isError && msg) activeToast({ message: msg, type: "error" });
    if (!message.isError && msg) {
      activeToast({ message: msg, type: "success" });
      navigate("/games", { replace: true });
    }
  }, [message.msg, message.isError, message]);

  return (
    <PageStyled>
      <NavBar />
      <PageLoginStyled>
        <FormLogin handleSetData={handleSetData} onSubmit={handleSubmit} />
      </PageLoginStyled>
      <UnsplashComponent />
    </PageStyled>
  );
};
