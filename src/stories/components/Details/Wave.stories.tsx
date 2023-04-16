import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WaveComponents } from "../../../components/Details/Wave";

export default {
    title: "Components/Details/Wave",
    component: WaveComponents,
    args: {

    }
} as ComponentMeta<typeof WaveComponents>;

export const Primary: ComponentStory<typeof WaveComponents> = () => (
    <WaveComponents />
);