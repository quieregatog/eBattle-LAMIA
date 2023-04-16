import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo } from "../../../components/Logo";

export default {
  title: "Components/Logo/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Primary: ComponentStory<typeof Logo> = () => <Logo />;
