import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectType } from "../../../components/SelectType";

export default {
    title: "Components/SelectType/SelecType",
    component: SelectType,
    args: {
        topics: [
            
        ]
    }
} as ComponentMeta<typeof SelectType>;

export const Primary: ComponentStory<typeof SelectType> = ({topics}) => (
    <SelectType topics={topics} />
);
