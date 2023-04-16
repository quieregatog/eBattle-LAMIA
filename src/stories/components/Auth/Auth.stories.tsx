import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Auth } from "../../../components/Auth";

export default {
    title: "Components/Auth/Auth",
    component: Auth,
    args:{
        className: "header-auth", 
        id: "5",
    }
} as ComponentMeta<typeof Auth>;

export const Primary: ComponentStory<typeof Auth> = ({className, id}) => (
    <Auth className={className} id={id} />
);