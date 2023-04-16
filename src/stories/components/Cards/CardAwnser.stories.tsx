import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CardAwnsers } from "../../../components/Cards/CardAwnser";

export default {
    title: "Components/Cards/CardAwnser",
    component: CardAwnsers, 
    args: {

    }
} as ComponentMeta<typeof CardAwnsers>;

export const Primary: ComponentStory<typeof CardAwnsers> = () => (
    <CardAwnsers />
);