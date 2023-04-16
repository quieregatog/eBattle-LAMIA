import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextArea } from "../../../components/Inputs/Textarea/TextArea";

export default {
    title: "Components/Inputs/TextArea",
    component: TextArea,
    args: {
        title: "Text Example",
    }
} as ComponentMeta<typeof TextArea>;

export const Primary: ComponentStory<typeof TextArea> = ({title}) => (
    <TextArea title={title} />
);