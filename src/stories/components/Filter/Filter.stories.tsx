import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FilterGame } from "../../../components/Filter";

export default {
    title: "Components/Filter/Filter",
    component: FilterGame,
    args: {

    }
} as ComponentMeta<typeof FilterGame>;

export const Primary: ComponentStory<typeof FilterGame> = () => (
    <FilterGame />
);