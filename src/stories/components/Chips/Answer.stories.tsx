import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Answer } from "../../../components/Chips/Answer";

export default {
    title: "Components/Chips/Answer",
    component: Answer,
    args: {
        id_awnswer: 1,
        name: "Text", 
   }
} as ComponentMeta<typeof Answer>;
 
export const Primary: ComponentStory<typeof Answer> = ({id_awnswer, name}) => (
    <Answer id_awnswer={id_awnswer} name={name} />
);