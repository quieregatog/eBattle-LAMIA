import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonPublic } from "../../../components/Button/Public";

export default {
    title: "Components/Buttons/Public",
    component: ButtonPublic,
    args: {
        isPublic: true, 
    }
} as ComponentMeta<typeof ButtonPublic>;

export const Primary: ComponentStory<typeof ButtonPublic> = ({isPublic}) => (
    <ButtonPublic isPublic={isPublic} />
);