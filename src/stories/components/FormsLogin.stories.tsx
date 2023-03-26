import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormLogin } from "../../components/Forms/FormLogin";

export default {
  title: "Components/FormLogin",
  component: FormLogin,
  args: {
   
  },
} as ComponentMeta<typeof FormLogin>;

export const Primary: ComponentStory<typeof FormLogin> = () => (<FormLogin />);
