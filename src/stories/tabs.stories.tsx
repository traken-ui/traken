import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComponentProps } from "react";
import { Tabs } from "../components/tabs/Tabs";

type TabItem = { key: React.Key; title: string };
type StoryProps = ComponentProps<typeof Tabs<TabItem>>;

const items = [
  { key: "tab1", title: "Photos" },
  { key: "tab2", title: "Musics" },
  { key: "tab3", title: "Videos" },
];

const meta: Meta<StoryProps> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    items: { table: { disable: true } },
    children: { table: { disable: true } },
    placement: { table: { disable: true } },
    isVertical: { table: { disable: true } },
    destroyInactiveTabPanel: { table: { disable: true } },
    defaultSelectedKey: { table: { disable: true } },
    selectedKey: { table: { disable: true } },
    classNames: { table: { disable: true } },

    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "underlined"],
      description: "Style variant of the tabs",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
      description: "Color theme of the tabs",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the tabs",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "Corner radius of the tabs",
    },
    isDisabled: {
      control: "boolean",
      description: "Disable all tabs",
    },
  },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
  args: {
    items,
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
    isDisabled: false,
    children: (item) => (
      <div className="p-4">This is {item.title} content.</div>
    ),
  },
};

export const Underlined: StoryObj<StoryProps> = {
  args: {
    items,
    variant: "underlined",
    color: "default",
    size: "sm",
    radius: "none",
    isDisabled: false,
  },
  render: (args) => <Tabs {...args} />,
};
