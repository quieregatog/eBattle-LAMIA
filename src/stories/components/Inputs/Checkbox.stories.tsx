import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "../../../components/Inputs/Checkbox";

export default {
    title: "Components/Inputs/Checkbox",
    component: Checkbox,
    args: {
        awnser: "Text Example",
    }
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = ({awnser}) => (
    <Checkbox awnser={awnser} />
);