import { Meta, StoryObj } from "@storybook/react";
import Badge from "../components/badge/badge";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Badge>;

const meta: Meta<StoryProps> = {
    component:Badge
};

export default meta;


type Story = StoryObj<StoryProps>;

export const Solid:Story = {};