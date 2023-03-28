import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from "../../components/NavBar";

export default {
    title: "Components/NavBar", 
    component: NavBar,
    args: {
    
    }
}as ComponentMeta<typeof NavBar>;

export const Primary: ComponentStory<typeof NavBar> = ({className, id}) =>(
    <NavBar className={className} id={id} />
);