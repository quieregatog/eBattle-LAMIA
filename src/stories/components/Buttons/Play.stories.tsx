import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonPlay } from "../../../components/Button/Play";

export default {
    title: "Components/Buttons/Play",
    component: ButtonPlay, 
    args: {
        title: "Text Example", 
    }
} as ComponentMeta<typeof ButtonPlay>;

export const Primary: ComponentStory<typeof ButtonPlay> = ({title}) => (
    <ButtonPlay title={title} />
);