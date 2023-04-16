import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "../../../components/Label";
import { defaultConst } from "../../AttributesDefault";

export default {
    title: "Components/Label/Label", 
    component: Label,
    argsType: {
        title: {
            type: "string",
            name: "Texto",
        },
        ...defaultConst,
    }
} as ComponentMeta<typeof Label>;

export const Primary: ComponentStory<typeof Label> = ({title}) => (
    <Label title={title} />
);
