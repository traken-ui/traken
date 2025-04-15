import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "../components/card/Card";
import React from "react";
import Button from "../components/button/Button";
import Input from "../components/input/input";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
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
      description: "Color of the card",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the card",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Border radius of the card",
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Shadow of the card",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    color: "light",
    size: "md",
    radius: "md",
    shadow: "md",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader
        {...args}
        className="flex items-center justify-start gap-4 p-4"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1907503240561963010/EAlPUJPR_400x400.jpg"
          alt="Traken UI Logo"
          className="h-12 w-12 rounded object-cover shadow-lg"
        />
        <div className="flex flex-col">
          <p className="font-bold opacity-95">Traken UI</p>
          <p className="text-small font-semibold opacity-90">ui.traken.in</p>
        </div>
      </CardHeader>
      <CardBody {...args} className="border-t border-gray-400">
        <p className="text-md opacity-90">
          Build stunning websites effortlessly, no design skills required.
          Create with confidence!
        </p>
      </CardBody>
      <CardFooter {...args}>
        <p className="text-md opacity-90">
          Visit source code on {" "}
          <a
            href="https://ui.traken.in"
            target="_blank"
            className="text-md cursor-pointer font-semibold text-blue-600 opacity-95"
          >
            GitHub
          </a>
        </p>
      </CardFooter>
    </Card>
  ),
};

export const Product: Story = {
  args: {
    color: "light",
    size: "lg",
    radius: "lg",
    shadow: "lg",
  },
  render: (args) => (
    <Card {...args} className="w-96">
      <CardBody {...args} className="flex items-center justify-center p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Watermelon_logo.png"
          alt="watermelon"
          className="w-80 rounded-lg bg-gray-100 saturate-200 filter"
        />
      </CardBody>
      <CardFooter {...args} className="flex items-start justify-between gap-4">
        <p className="text-lg font-bold opacity-95">Watermelon</p>
        <p className="font-medium opacity-90">$7.09</p>
      </CardFooter>
    </Card>
  ),
};

export const Profile: Story = {
  args: {
    color: "light",
    size: "lg",
    radius: "lg",
    shadow: "lg",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader
        {...args}
        className="flex flex-col justify-center items-center gap-4 text-center"
      >
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_3t/10912.jpg"
          alt="User Avatar"
          className="h-24 w-24 rounded-full border-2 object-cover shadow-lg"
        />
        <div>
          <h2 className="text-xl font-semibold">Lisa</h2>
          <p className="text-sm font-medium opacity-90">Singer and Dancer</p>
        </div>
      </CardHeader>
      <CardBody {...args} className="text-center">
        <p className="px-10 text-sm opacity-80">
          Lalisa Manobal, also known as Lisa, is a member of the South Korean
          girl group Blackpink,.
        </p>
      </CardBody>
      <CardFooter
        {...args}
        className="flex justify-center border-t border-gray-500"
      >
        <Button color="primary">Send Message</Button>
      </CardFooter>
    </Card>
  ),
};

export const LoginCard: Story = {
  args: {
    color: "base",
    size: "md",
    radius: "md",
    shadow: "md",
  },
  render: (args) => (
    <Card {...args} >
      <CardHeader {...args} >
        <div className="w-full bg-neutral-800 py-10 text-gray-200 flex items-center justify-center rounded-xl text-2xl font-bold">Sign In</div>
      </CardHeader>
      <CardBody {...args}>
        <input type="text" placeholder="Email" className="w-full py-2 px-4 mb-1 border-2 border-gray-500 rounded-md focus:outline-0"/>
        <input type="password" placeholder="Password" className="w-full py-2 px-4 mt-1 border-2 border-gray-500 rounded-md focus:outline-0"/>
      </CardBody>
      <CardFooter {...args} className="flex flex-col items-center">
        <Button color="primary">Sign In</Button>
        <p className="text-sm mt-2">Don't have account ? <span className="text-[1rem] font-semibold opacity-80 cursor-pointer">Sign up</span></p>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  args: {
    color: "light",
    size: "lg",
    radius: "lg",
    shadow: "lg",
  },
  render: (args) => (
    <Card {...args} >
      <CardHeader {...args}>
        <img src="https://assets.telegraphindia.com/telegraph/2024/Feb/1707386339_lisa-from-blackpink.jpg" alt="Lisa in black and white shirt" className={`w-${args.size} rounded-${args.radius}`} />
      </CardHeader>
      <CardBody {...args} >
        <h1 className="text-2xl text-font-bold">Let me check</h1>
        <p className="text-[1rem] mt-2 opacity-90">Lisa from BLACKPINK is a talented rapper, dancer, and fashion icon, known for her charisma, versatility, and global influence.</p>
      </CardBody>
      <CardFooter {...args} className="flex justify-start">
        <Button color="primary">Read more</Button>
      </CardFooter>
    </Card>
  ),
};
