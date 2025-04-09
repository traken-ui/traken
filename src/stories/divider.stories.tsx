import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import React from "react";
import Divider from "../components/divider/Divider";

type StoryProps = ComponentProps<typeof Divider>;

const meta: Meta<StoryProps> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
      description: "Color of the divider",
    },
    thickness: {
      control: "select",
      options: ["thin", "medium", "thick"],
      description: "Thickness of the divider",
    },
    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
      description: "Border style of the divider",
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Spacing around the divider",
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Orientation of the divider",
    },
  },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
  args: {
    color: "default",
    thickness: "medium",
    variant: "solid",
    spacing: "md",
    orientation: "horizontal",
  },
  render: (args) => <Divider {...args} />,
};

export const Vertical: StoryObj<StoryProps> = {
  args: {
    color: "primary",
    thickness: "thick",
    variant: "dotted",
    spacing: "lg",
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-32 items-center space-x-4">
      {/* <span>Left</span> */}
      <Divider {...args} />
      {/* <span>Right</span> */}
    </div>
  ),
};
