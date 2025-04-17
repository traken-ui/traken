import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../components/tooltip/Tooltip";
import { ComponentProps } from "react";
import React from "react";
import Button from "../components/button/Button";

type StoryProps = ComponentProps<typeof Tooltip> & {
  tooltipText: string;
};

const meta: Meta<StoryProps> = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
  argTypes: {
    content: {
      control: "text",
      description: "Text to be displayed in the tooltip",
    },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Position of the tooltip",
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
        "light",
        "dark",
      ],
      description: "Color of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the tooltip",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "Radius of the tooltip",
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Shadow of the tooltip",
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
      description: "Variant of the tooltip",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    content: "I am a tooltip button",
    color: "base",
    position: "top",
    size: "md",
    radius: "md",
    shadow: "sm",
    variant: "solid",
  },
  render: (args) => (
    <div className="wrapper flex h-screen w-full items-center justify-center">
      <Tooltip {...args}>
        <Button className="cursor-pointer rounded-md bg-blue-500 px-6 py-2 font-semibold text-white">
          Hover Me
        </Button>
      </Tooltip>
    </div>
  ),
};
