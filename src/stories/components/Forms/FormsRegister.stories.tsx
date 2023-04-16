import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormRegister } from "../../../components/Forms/FormRegister";

export default {
    title: "Components/Forms/FormsRegister",
    component: FormRegister,
    args: {

    }
} as ComponentMeta<typeof FormRegister>;

export const Primary: ComponentStory<typeof FormRegister> = () => (
    <FormRegister />
);