import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UnsplashComponent } from "../../../components/Details/Unsplash";

export default {
    title: "Components/Details/Unsplash",
    component: UnsplashComponent,
    args: {

    }
} as ComponentMeta<typeof UnsplashComponent>;

export const Primary: ComponentStory<typeof UnsplashComponent> = () => (
    <UnsplashComponent />
);