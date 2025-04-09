import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Button from "../components/button/Button";
import React from "react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    title: "Components/Button", 
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        buttonText: {
            control: "text",
            description: "Text to be displayed on the button",
        },
        color: {
            control: "select",
            options: ["base", "primary", "secondary", "success", "warning", "danger"],
            description: "Color of the button",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            description: "Size of the button",
        },
        rounded: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "full"],
            description: "Rounded corners of the button",
        },
        variant: {
            control: "select",
            options: ["solid", "outline", "ghost", "flat"],
            description: "Variant of the button",
        },
    }
}

export default meta;

export const Default: StoryObj<StoryProps> = {
    args: {
        buttonText: "Default Button",
        color: "base",
        size: "md",
        rounded: "md",
        variant: "solid",
    },
    render: (args) => <Button {...args}>{args.buttonText}</Button>,
};
