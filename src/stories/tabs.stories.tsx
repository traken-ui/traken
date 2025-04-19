import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComponentProps } from "react";
import { Tab, Tabs } from "../components/tabs/Tabs";

type StoryProps = ComponentProps<typeof Tabs>;

const meta: Meta<StoryProps> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "bordered", "light", "underlined"],
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "full"],
      },
    },
    isVertical: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
    defaultSelectedKey: "tab1",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab tabKey="tab1" title="Tab 1">
        Content for Tab 1
      </Tab>
      <Tab tabKey="tab2" title="Tab 2">
        Content for Tab 2
      </Tab>
      <Tab tabKey="tab3" title="Tab 3">
        Content for Tab 3
      </Tab>
    </Tabs>
  ),
};

export const Bordered: StoryObj<StoryProps> = {
  args: {
    variant: "bordered",
    color: "primary",
    size: "md",
    radius: "md",
    isDisabled: false,
    defaultSelectedKey: "tab1",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab tabKey="tab1" title="Photos">
        <div className="p-4">This is Photos content.</div>
      </Tab>
      <Tab tabKey="tab2" title="Music">
        <div className="p-4">This is Music content.</div>
      </Tab>
      <Tab tabKey="tab3" title="Videos">
        <div className="p-4">This is Videos content.</div>
      </Tab>
    </Tabs>
  ),
};

export const Light: StoryObj<StoryProps> = {
  args: {
    variant: "light",
    color: "success",
    size: "md",
    radius: "lg",
    isDisabled: false,
    defaultSelectedKey: "tab1",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab tabKey="tab1" title="Photos">
        <div className="p-4">This is Photos content.</div>
      </Tab>
      <Tab tabKey="tab2" title="Music">
        <div className="p-4">This is Music content.</div>
      </Tab>
      <Tab tabKey="tab3" title="Videos">
        <div className="p-4">This is Videos content.</div>
      </Tab>
    </Tabs>
  ),
};

export const Vertical: StoryObj<StoryProps> = {
  args: {
    variant: "solid",
    color: "secondary",
    size: "md",
    radius: "md",
    isVertical: true,
    defaultSelectedKey: "tab1",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab tabKey="tab1" title="Photos">
        <div className="p-4">This is Photos content.</div>
      </Tab>
      <Tab tabKey="tab2" title="Music">
        <div className="p-4">This is Music content.</div>
      </Tab>
      <Tab tabKey="tab3" title="Videos">
        <div className="p-4">This is Videos content.</div>
      </Tab>
    </Tabs>
  ),
};

export const DisabledTabs: StoryObj<StoryProps> = {
  args: {
    variant: "solid",
    color: "danger",
    size: "md",
    radius: "md",
    disabledKeys: ["tab2"],
    defaultSelectedKey: "tab1",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab tabKey="tab1" title="Photos">
        <div className="p-4">This is Photos content.</div>
      </Tab>
      <Tab tabKey="tab2" title="Music (Disabled)">
        <div className="p-4">This is Music content.</div>
      </Tab>
      <Tab tabKey="tab3" title="Videos">
        <div className="p-4">This is Videos content.</div>
      </Tab>
    </Tabs>
  ),
};
