import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Input from "../components/input/input";

import React from "react";



type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        alt: {
            control: "text",
            description: "Alternative text for the image",
        },
        color: {
            control: "select",
            options: [
                "base",
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
            ],
            description: "Color of the avatar",
        },
        size: {
            control: "select",
            options: ["sm", "base", "md", "lg", "xl"],
            description: "Size of the avatar",
        },
        name: {
            control: "text",
            description: "Name of the user",
        },
    },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
    args: {
        color: "base",
        placeholder: "John Doe",
    },
    render: (args: any) => <Input {...args} />,
};
