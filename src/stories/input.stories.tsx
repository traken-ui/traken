import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Input from "../components/input/input";

import React from "react";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        label:{
            control:"text"
        },
        variant: {
            control: "select",
            options: ["flat", "faded", "bordered", "underlined"],
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
        },
        size: {
            control: "select",
            options: ["base","sm", "md", "lg", "xl"],
        },
        rounded: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "full"],
        },
        placeholder:{
            control:"text"
        },
        id:{
            control:"text"
        },
    },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
    args: {
        variant:"flat",
        color: "base",
        size:"base",
        rounded:"sm",
        placeholder:"",
        disabled:false,
        fullWidth:false,
    },
    render: (args: any) => <Input {...args} />,
};
