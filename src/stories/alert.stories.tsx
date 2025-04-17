import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import React from "react";
import Alert from "../components/alert/Alert";

type StoryProps = ComponentProps<typeof Alert> & {
    alertText: string;
};

const meta: Meta<StoryProps> = {
    title: "Components/Alert",
    component: Alert,
    tags: ["autodocs"],
    argTypes: {
        alertText: {
            control: "text",
            description: "Text to be displayed inside the alert",
        },
        color: {
            control: "select",
            options: ["base", "primary", "secondary", "success", "warning", "danger"],
            description: "Variant of the alert",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            description: "Size of the alert",
        },
        rounded: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "full"],
            description: "Radius corners of the alert",
        },
        variant: {
            control: "select",
            options: ["solid", "flat", "bordered", "faded"],
            description: "Variant of the button",
        },
        shadow: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            description: "Shadow of the alert",
        },

    },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
    args: {
        alertText: "This is an alert!",
        color: "primary",
        size: "md",
        rounded: "md",
        variant: "solid",
        shadow: "md",
    },
    render: (args) => (<Alert {...args} className="max-w-20" >{args.alertText}</Alert>
    ),
};