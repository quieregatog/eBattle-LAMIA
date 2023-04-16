import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CardClasses } from "../../../components/Cards/CardsClasses";

export default {
    title: "Components/Cards/CardsClasses",
    component: CardClasses,
    args: {

    }
} as ComponentMeta<typeof CardClasses>;

export const Primary: ComponentStory<typeof CardClasses> = ({author, last_edition, name, nivel, number_anwser, publicCard, tag }) => (
    <CardClasses author={author} last_edition={last_edition} name={name} nivel={nivel} number_anwser={number_anwser} publicCard={publicCard} tag={tag} />
);