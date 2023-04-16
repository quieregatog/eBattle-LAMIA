import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChipText } from "../../../components/Chips";
import { defaultConst } from "../../AttributesDefault";

export default {
  title: "Components/Chips/Text",
  component: ChipText,
  argTypes: {
    title: {
      type: "string",
      name: "Titulo",
    },
    ...defaultConst,
  },
} as ComponentMeta<typeof ChipText>;

export const Primary: ComponentStory<typeof ChipText> = ({ title }) => (
  <ChipText title={title} />
);
