import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BackPage } from "../../../components/Label/BackPage";

export default {
    title: "Components/Label/BackPage",
    component: BackPage,
    args: {
        name: "Text",
    } 
} as ComponentMeta<typeof BackPage>;

export const Primary: ComponentStory<typeof BackPage> = ({name}) => (
    <BackPage name={name} />
);