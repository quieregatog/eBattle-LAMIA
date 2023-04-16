import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonClear } from "../../../components/Button/Clear";

export default {
    title: "Components/Buttons/Clear",
    component: ButtonClear,
    args: {
        title: "Text exemple",
    }
} as ComponentMeta<typeof ButtonClear>;

export const Primary: ComponentStory<typeof ButtonClear> = ({title}) => (
    <ButtonClear title={title} />
);