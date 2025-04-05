import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import ToggleSwitch from "../components/switch/Switch";
import React, { useState } from "react";

// Define story properties
type StoryProps = ComponentProps<typeof ToggleSwitch> & {
  onText: string;
  offTextt: string;
};

const meta: Meta<StoryProps> = {
  title: "Components/Switch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the switch is turned on or off",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the switch",
    },
    color: {
      control: "select",
      options: ["base", "primary", "secondary", "success", "warning", "danger", "transperent"],
      description: "Color theme of the switch",
    },
    onText: {
      control: "text",
      description: "Text to show when the switch is ON",
    },
    offTextt: {
      control: "text",
      description: "Text to show when the switch is OFF",
    },
  },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
  args: {
    checked: false,
    size: "md",
    color: "primary",
    onText: "On",
    offTextt: "Off",
  },
  render: (args) => {
    const [isOn, setIsOn] = useState(args.checked);

    const handleToggle = () => {
      setIsOn((prev) => !prev);
      if (args.onChange) {
        args.onChange(!isOn);
      }
    };

    return (
      <ToggleSwitch
        {...args}
        checked={isOn}
        onChange={() => setIsOn((prev) => !prev)}
      />
    );
  },
};
