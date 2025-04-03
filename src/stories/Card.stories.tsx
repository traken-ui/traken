import { Meta, StoryObj } from "@storybook/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "../components/card/Card";
import React from "react";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "select",
            options: [
                "light",
                "dark",
            ],
            description: "Color of the card",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            description: "Size of the card",
        },
        radius: {
            control: "select",
            options: ["none", "sm", "md", "lg"],
            description: "Border radius of the card",
        },
        shadow: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl"],
            description: "Shadow of the card",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        color: "light",
        size: "md",
        radius: "md",
        shadow: "md",
        className: "",
    },
    render: (args) => (
        <Card {...args}>
            <CardHeader color={args.color} className={args.className}>Card Header</CardHeader>
            <CardBody color={args.color} className={args.className}>Card Body</CardBody>
            <CardFooter color={args.color} className={args.className}>Card Footer</CardFooter>
        </Card>
    ),
};
