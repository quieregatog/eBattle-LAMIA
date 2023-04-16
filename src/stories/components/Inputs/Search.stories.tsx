import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputSearch } from "../../../components/Inputs/Search";

export default {
    title: "Components/Inputs/Search",
    component: InputSearch,
    args: {
        
    }
} as ComponentMeta<typeof InputSearch>;

export const Primary: ComponentStory<typeof InputSearch> = ({className, id}) => (
    <InputSearch className={className} id={id} placeholder={""} name={""} />
);