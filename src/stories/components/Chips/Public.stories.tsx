import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChipPublic } from "../../../components/Chips/Public";

export default {
    title: "Components/Chips/Public",
    component: ChipPublic,
    args: {
        isPublic: true,
    }
} as ComponentMeta<typeof ChipPublic>;

export const Primary: ComponentStory<typeof ChipPublic> = ({isPublic}) => (
    <ChipPublic isPublic={isPublic} />
);