import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Avatar from "../components/avatar/avatar";

import React from "react";

import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof Avatar>

const meta: Meta<StoryProps> = {
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        src: {
            control: "text",
            description: "Source URL of the image",
        },
        name: {
            control: "text",
            description: "Name of the user",
        },
        alt: {
            control: "text",
            description: "Alternative text for the image",
        },
        isBordered: {
            control: "boolean",
            description: "Whether the avatar has a border",
        },
        color: {
            control: "select",
            options: ["base", "primary", "secondary", "success", "warning", "danger"],
            description: "Color of the avatar",
        },
        size: {
            control: "select",
            options: ["sm", "base", "md", "lg", "xl"],
            description: "Size of the avatar",
        },
        radius: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "2xl", "3xl", "full"],
            description: "Border radius of the avatar",
        },
   
        icon: {
            control: "text",
            description: "Icon to be displayed inside the avatar",
        },
        fallback: {
            control: "text",
            description: "Fallback content if the image fails to load",
        },
        isDisabled: {
            control: "boolean",
            description: "Whether the avatar is disabled",
        },
 
    }
}

export default meta;


export const Default: StoryObj<StoryProps> = {
    args: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Avatar Image",
        isBordered: true,
        color: "base",
        size: "base",
        radius: "full",
        name: "John Doe",
        icon: "👤",
        fallback: "Fallback Content",
        isDisabled: false,
    },
    render: (args: any) => <Avatar {...args} />,
};