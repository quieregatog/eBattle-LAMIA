import { ComponentMeta, ComponentStory } from "@storybook/react";
import { OpenList } from "../../../components/Chips/OpenList";

export default {
    title: "Components/Chips/OpenList",
    component: OpenList,
    args: {

    }
} as ComponentMeta<typeof OpenList>;

export const Primary: ComponentStory<typeof OpenList> = () => (
    <OpenList />
);