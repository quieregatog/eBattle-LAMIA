import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChipTag } from "../../../components/Chips/ChipTag";

export default {
    title: "Components/Chips/ChipTag",
    component: ChipTag,
    args: {
        title: "Text Example",
    }
} as ComponentMeta<typeof ChipTag>;

export const Primary: ComponentStory<typeof ChipTag> = ({title}) => (
    <ChipTag title={title} />
);