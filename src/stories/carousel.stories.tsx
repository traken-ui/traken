import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Carousel from "../components/carousel/Carousel"; 
import React from "react";

type StoryProps = ComponentProps<typeof Carousel> & {
 
};

const meta: Meta<StoryProps> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    slides: {
      control: "object",
      description:
        "Array of slides to display. Can be strings (image URLs) or React nodes.",
    },
    autoPlay: {
      control: "boolean",
      description: "Whether the carousel should automatically advance slides.",
    },
    interval: {
      control: "number",
      description: "Time in milliseconds between auto slide transitions.",
      if: { arg: "autoPlay" }, 
    },
    showArrows: {
      control: "boolean",
      description: "Whether to display navigation arrows.",
    },
    showIndicators: {
      control: "boolean",
      description: "Whether to display slide indicators.",
    },
    navigation: {
      control: "select",
      options: ["inside", "outside", "none"],
      description: "Position of the navigation arrows.",
    },
    navigationStyle: {
      control: "select",
      options: ["arrows", "none"],
      description: "Style of the navigation (arrows or none).",
      if: { arg: "showArrows" },
    },
    indicatorPosition: {
      control: "select",
      options: ["dots", "numbers", "none", "bars"],
      description: "Position and type of the slide indicators.",
    },
    indicatorStyle: {
      control: "select",
      options: ["dots", "bars", "numbers"],
      description: "Style of the slide indicators.",
      if: { arg: "showIndicators" }, 
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "fullWidth", "fullHeight"],
      description: "Size of the carousel.",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "Rounded corners of the carousel.",
    },
    loop: {
      control: "boolean",
      description: "Whether the carousel should loop back to the beginning.",
    },
  },
};

export default meta;

const images = [
  "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const customContent = [
  <div className="flex h-64 items-center justify-center bg-blue-500 text-xl font-bold text-white">
    Slide 1
  </div>,
  <div className="flex h-64 items-center justify-center bg-red-500 text-xl font-bold text-white">
    Slide 2
  </div>,
  <div className="flex h-64 items-center justify-center bg-green-500 text-xl font-bold text-white">
    Slide 3
  </div>,
];

export const Default: StoryObj<StoryProps> = {
  args: {
    slides: images,
    autoPlay: true,
    interval: 3000,
    showArrows: true,
    showIndicators: true,
    navigation: "inside",
    navigationStyle: "arrows",
    indicatorPosition: "dots",
    indicatorStyle: "dots",
    size: "md",
    radius: "md",
    loop: true,
  },
};
