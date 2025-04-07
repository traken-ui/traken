import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../components/badge/Badge";
import { ComponentProps } from "react";
import React from "react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["base", "primary", "secondary", "success", "warning", "danger"],
      description: "Sets the color theme of the badge",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Controls the size of the badge",
    },
    rounded: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Controls the border radius",
    },
    variant: {
      control: "select",
      options: ["solid", "flat", "faded", "shadow"],
      description: "Controls the visual style of the badge",
    },
    placement: {
      control: "select",
      options: ["topRight", "topLeft", "bottomRight", "bottomLeft"],
      description: "Controls the position when used as an indicator",
    },
    content: {
      control: "text",
      description: "Content to display inside the badge",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Basic Badge Examples
export const Default: Story = {
  args: {
    content: "Badge",
  },
};

export const WithPlacement: Story = {
  render: () => (
    <div className="relative flex h-16 w-16 items-center justify-center bg-gray-200">
      Box
      <Badge placement="topRight" content="1" color="danger" size="sm" />
    </div>
  ),
};

// Component Examples
export const NotificationBadge: Story = {
  render: () => (
    <div className="flex space-x-4">
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <span>🔔</span>
        </div>
        <Badge placement="topRight" content="3" color="danger" size="sm" />
      </div>

      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <span>📬</span>
        </div>
        <Badge placement="topRight" content="7" color="primary" size="sm" />
      </div>

      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <span>👤</span>
        </div>
        <Badge
          placement="bottomRight"
          variant="faded"
          size="sm"
          content="●"
          color="success"
        />
      </div>
    </div>
  ),
};

// Badge with custom content
export const WithReactNode: Story = {
  render: () => (
    <Badge color="primary">
      <span className="flex items-center gap-1">
        <span>New</span>
        <span className="text-xs">✨</span>
      </span>
    </Badge>
  ),
};

// All colors showcase
export const ColorShowcase: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="base" content="Base" />
      <Badge color="primary" content="Primary" />
      <Badge color="secondary" content="Secondary" />
      <Badge color="success" content="Success" />
      <Badge color="warning" content="Warning" />
      <Badge color="danger" content="Danger" />
    </div>
  ),
};

// All variants showcase
export const VariantShowcase: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="primary" variant="solid" content="Solid" />
      <Badge color="primary" variant="flat" content="Flat" />
      <Badge color="primary" variant="faded" content="Faded" />
      <Badge color="primary" variant="shadow" content="Shadow" />
    </div>
  ),
};
