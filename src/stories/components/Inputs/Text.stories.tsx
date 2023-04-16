import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputText } from "../../../components/Inputs/Text";

export default {
    title: "Components/Inputs/Text",
    component: InputText,
    args: {

    }
} as ComponentMeta<typeof InputText>;

export const Primary: ComponentStory<typeof InputText> = ({className, id, title}) => (
    <InputText className={className} id={id} title={title} type={"text"} placeholder={""} name={""} />
);