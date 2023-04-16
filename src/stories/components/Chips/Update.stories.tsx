import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UpdateChip } from "../../../components/Chips/Update";

export default {
    title: "Components/Chips/Update",
    component: UpdateChip,
    args:{

    }
} as ComponentMeta<typeof UpdateChip>;

export const Primary: ComponentStory<typeof UpdateChip> = ( ) => (
    <UpdateChip />
);