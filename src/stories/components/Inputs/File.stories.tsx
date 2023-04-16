import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputFile } from "../../../components/Inputs/ButtonFile/File";

export default {
    title: "Components/Inputs/File",
    component: InputFile,
    args: {
        title: "Text Example",
    }
} as ComponentMeta<typeof InputFile>;

export const Primary: ComponentStory<typeof InputFile> = ({title}) => (
    <InputFile title={title} />
);