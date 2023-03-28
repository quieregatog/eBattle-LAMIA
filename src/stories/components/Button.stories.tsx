import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonDefault } from "../../components/Button/Default";

export default {
  title: "Components/Button",
  component: ButtonDefault,
  args: {
    title: "Text example",
  },
} as ComponentMeta<typeof ButtonDefault>;

export const Primary: ComponentStory<typeof ButtonDefault> = ({ title }) => (
  <ButtonDefault title={title} />
);
