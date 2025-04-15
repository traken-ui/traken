import { Meta, StoryObj } from "@storybook/react";
import Loader from "../components/loader/Loader";
import { ComponentProps } from "react";
import React from "react";

type StoryProps = ComponentProps<typeof Loader> & {
  tooltipText: string;
};

const meta: Meta<StoryProps> = {
  title: "Components/Loader",
  tags: ["autodocs"],
  component: Loader,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "base",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
        ],
      },
    },
    type: {
      control: {
        type: "select",
        options: [
          "spinner",
          "dots",
          "neon",
          "line",
          "logo",
          "square",
          "letters",
          "bird",
        ],
      },
    },
    labelColor: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    size: "md",
    color: "base",
    type: "spinner",
    label: "Loading...",
    labelColor: "text-base",
  },
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <Loader {...args} />
    </div>
  ),
};

export const Spinner: Story = {
  args: {
    size: "md",
    color: "base",
    type: "spinner",
    label: "Loading...",
    labelColor: "text-base",
  },
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <Loader {...args} />
    </div>
  ),
};

export const Dots: Story = {
  args: {
    size: "xl",
    color: "primary",
    type: "dots",
    label: "Loading...",
    labelColor: "text-base",
  },
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <Loader {...args} />
    </div>
  ),
};

export const Neon: Story = {
  args: {
    size: "lg",
    color: "secondary",
    type: "neon",
    label: "Loading...",
    labelColor: "text-base",
  },
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <Loader {...args} />
    </div>
  ),
};
