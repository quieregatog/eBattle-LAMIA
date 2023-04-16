import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toast } from "../../../components/Toast";

export default {
    title: "Components/Toast/Toast",
    component: Toast,
    args: {

    } 
} as ComponentMeta<typeof Toast>;

export const Primary: ComponentStory<typeof Toast> = ( ) => (
    <Toast />
);