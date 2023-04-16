import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonTopic } from "../../../components/Button/Topic";

export default {
    title: "Components/Buttons/Topic",
    component: ButtonTopic,
    args: {
        title: "Text Exemple"
    }
} as ComponentMeta<typeof ButtonTopic>;

export const Primary: ComponentStory<typeof ButtonTopic> = ({title}) => (
    <ButtonTopic title={title} />
);