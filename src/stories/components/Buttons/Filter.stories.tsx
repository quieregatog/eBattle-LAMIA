import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonFilter } from "../../../components/Button/Filter";

export default {
    title: "Components/Buttons/Filter",
    component: ButtonFilter,
    args: {
        title: "Text Exemple",
    } 
} as ComponentMeta<typeof ButtonFilter>;

export const Primary: ComponentStory<typeof ButtonFilter> = ({title}) => (
    <ButtonFilter title={title} />
);