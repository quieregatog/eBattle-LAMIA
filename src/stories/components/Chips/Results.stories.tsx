import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ResultsSearch } from "../../../components/Chips/Results";

export default {
    title: "Components/Chips/Results",
    component: ResultsSearch,
    args: {
        topics: [
            "text",
            "text"
        ]
    }
} as ComponentMeta<typeof ResultsSearch>;

export const Primary: ComponentStory<typeof ResultsSearch> = ({topics}) => (
    <ResultsSearch topics={topics} />
);