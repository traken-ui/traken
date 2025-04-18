import { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select, Option, SelectGroup } from "../components/select/Select";
import React from "react";

type StoryProps = ComponentProps<typeof Select>;

const meta: Meta<typeof Select> = {
  title: "Components/CustomSelect",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "faded", "bordered", "underlined"],
    },
    color: {
      control: "select",
      options: ["base", "primary", "secondary", "success", "warning", "danger"],
    },
    rounded: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
  },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
  args: {
    variant: "flat",
    color: "base",
    rounded: "sm",
    isDisabled: false,
    fullWidth: false,
    multi: true,
  },
  render: (args) => (
    <div className="w-72 h-72">
      <Select multi>
        <SelectGroup label="Fruits">
          <Option value="apple">Apple</Option>
          <Option value="banana">Banana</Option>
        </SelectGroup>
        <SelectGroup label="Vegetables">
          <Option value="carrot">Carrot</Option>
          <Option value="spinach">Spinach</Option>
        </SelectGroup>
        <Option value="none">None</Option>
      </Select>
    </div>
  ),
};
