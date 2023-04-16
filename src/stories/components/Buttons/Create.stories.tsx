import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonUpdate } from "../../../components/Button/Create";

export default {
    title: "Components/Buttons/Create",
    component: ButtonUpdate,
    args: {
        title: "Text Example",
        type: 'save',
        styleBord: 'fill',
    }
} as ComponentMeta<typeof ButtonUpdate>;

export const Primary: ComponentStory<typeof ButtonUpdate> = ({title, type, styleBord }) => (
    <ButtonUpdate title={title} type={type} styleBord={styleBord} />
);