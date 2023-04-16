import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormLogin } from "../../components/Forms/FormLogin";
import { useHookForm } from "../../hook/useFormData";

export default {
  title: "Components/FormLogin",
  component: FormLogin,
  args: {},
} as ComponentMeta<typeof FormLogin>;

export const Primary: ComponentStory<typeof FormLogin> = () => {
  const { handleSetData } = useHookForm();

  const handleSubmit = () => {
    alert("Você submeteu os dados");
  };

  return <FormLogin handleSetData={handleSetData} onSubmit={handleSubmit} />;
};
