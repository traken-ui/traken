/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// import { ComponentProps } from "react";
import { useState } from "react";
import { Calendar } from "../components/Calendar/Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "month-year-picker", "range-picker"],
    },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    disablePast: { control: "boolean" },
    disableFuture: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (args) => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    return (
      <Calendar
        {...args}
        selectedDates={selectedDates}
        onDateSelect={(date) => setSelectedDates([date])}
      />
    );
  },
  args: {
    variant: "default",
    color: "light",
    disablePast: false,
    disableFuture: false,
  },
};

export const MonthYearPicker: Story = {
  render: (args) => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    return (
      <Calendar
        {...args}
        selectedDates={selectedDates}
        onDateSelect={(date) => setSelectedDates([date])}
      />
    );
  },
  args: {
    variant: "month-year-picker",
  },
};

export const RangePicker: Story = {
  render: (args) => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    return (
      <Calendar
        {...args}
        selectedDates={selectedDates}
        onDateSelect={(date) => setSelectedDates([...selectedDates, date])}
      />
    );
  },
  args: {
    variant: "range-picker",
  },
};

export const DisablePastDates: Story = {
  render: (args) => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    return (
      <Calendar
        {...args}
        selectedDates={selectedDates}
        onDateSelect={(date) => setSelectedDates([date])}
      />
    );
  },
  args: {
    disablePast: true,
  },
};

export const DisableFutureDates: Story = {
  render: (args) => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    return (
      <Calendar
        {...args}
        selectedDates={selectedDates}
        onDateSelect={(date) => setSelectedDates([date])}
      />
    );
  },
  args: {
    disableFuture: true,
  },
};
