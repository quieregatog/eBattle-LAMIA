import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonLink } from "../../../components/Button/Link";

export default {
  title: "Components/Buttons/Link",
  componet: ButtonLink,
  args: {
    to: "/",
  },
} as ComponentMeta<typeof ButtonLink>;

export const Primary: ComponentStory<typeof ButtonLink> = ({ to }) => (
  <ButtonLink to={""} />
);
