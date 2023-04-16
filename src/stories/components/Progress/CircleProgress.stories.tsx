import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CircleProgress } from "../../../components/Progress/CircleProgress";

export default {
    title: "Components/Progress/CircleProgress",
    component: CircleProgress,
    args: {
        active: true,
    }
} as ComponentMeta<typeof CircleProgress>;

export const Primary: ComponentStory<typeof CircleProgress> = ({active}) => (
    <CircleProgress active={active} />
);