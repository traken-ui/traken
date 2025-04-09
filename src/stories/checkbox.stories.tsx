import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Checkbox from "../components/checkbox/checkbox"

import React from "react";

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    color: {
      control: "select",
      options: ["base", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: [ "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: "select",
      options: ["none","sm", "md", "lg", "xl", "full"],
    },
    id: {
      control: "text",
    },
    strike:{
        control:"boolean"
    }
  },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
  args: {
    color: "base",
    size: "sm",
    rounded: "sm",
    strike:false,
    disabled: false,
  },
  render: (args) => <Checkbox {...args} />,
};
