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
      options: ["light", "dark"],
      description: "Color of the card",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
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

// Story Books for Card Component
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
          src="https://pbs.twimg.com/profile_images/1910837745565536256/q9GR5cSX_400x400.jpg"
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
          Visit source code on{" "}
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
    <Card
      {...args}
      className="relative overflow-hidden shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-600"></div>

      <CardHeader className="px-4 py-2" {...args}>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Watermelon_logo.png"
              alt="Watermelon"
              className="h-20 w-20 rounded-xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 object-contain p-2 shadow-sm"
            />

            <div>
              <h1 className="flex items-center gap-1 text-xl font-bold tracking-tight">
                Watermelon
                <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  Organic
                </span>
              </h1>
              <div className="mt-1 text-sm">Premium summer fruit</div>
            </div>
          </div>

          <div className="absolute right-0 bottom-4 flex flex-col items-end">
            <div className="flex items-center gap-0.5">
              <span className="h-4 w-4 fill-amber-400" />
              <span className="h-4 w-4 fill-amber-400" />
              <span className="h-4 w-4 fill-amber-400" />
              <span className="h-4 w-4 fill-amber-400" />
              <span className="h-4 w-4 fill-gray-200" />
              <span className="ml-1 text-xs">4.0</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody {...args} className="px-4 pt-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            {["Sweet", "Juicy", "Fresh"].map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-2xl font-bold text-emerald-600">$7.09</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <p className="text-sm">Rich in vitamins A, B6, and C</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <p className="text-sm">92% water content, perfect for hydration</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <p className="text-sm">Contains antioxidants like lycopene</p>
          </div>
        </div>
      </CardBody>

      <CardFooter
        {...args}
        className="flex items-center justify-between px-4 pt-2 pb-6"
      >
        <Button
          variant="outline"
          size="sm"
          rounded="full"
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900"
        >
          ! Details
        </Button>

        <Button
          size="md"
          rounded="md"
          className="bg-emerald-500 hover:bg-emerald-600"
        >
          ⨠ Add to Cart
        </Button>
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
        className="flex flex-col items-center justify-center gap-4 pt-6 text-center"
      >
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_3t/10912.jpg"
          alt="User Avatar"
          className="h-24 w-24 rounded-full border-4 object-cover shadow-xl transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">Lisa</h2>
          <p className="text-sm font-medium">Singer and Dancer</p>
        </div>
      </CardHeader>

      <CardBody {...args} className="px-8 pb-4 text-center">
        <p className="text-sm leading-relaxed">
          Lalisa Manobal, also known as Lisa, is a member of the South Korean
          girl group Blackpink.
        </p>
      </CardBody>

      <CardFooter
        {...args}
        className="flex items-center justify-center gap-2 border-t border-white/10 px-6 py-4"
      >
        <Button
          variant="outline"
          className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          Send Message
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const ModernLoginCard: Story = {
  args: {
    color: "light",
    size: "md",
    radius: "md",
    shadow: "md",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader {...args}>
        <div className="flex items-center justify-center rounded-t-2xl bg-indigo-500 py-8 text-3xl font-semibold text-white hover:bg-indigo-600">
          Sign In
        </div>
      </CardHeader>

      <CardBody {...args} className="flex flex-col gap-4 px-8 py-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border focus:outline-1 outline-gray-300 border-gray-200 px-4 py-2 text-sm text-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border focus:outline-1 outline-gray-300 border-gray-200 px-4 py-2 text-sm text-gray-500"
        />
      </CardBody>

      <CardFooter
        {...args}
        className="flex flex-col items-center gap-3 px-8 pb-6"
      >
        <Button
          rounded="md"
          className="w-full bg-indigo-500 px-4 py-2 text-white transition hover:bg-indigo-600"
        >
          Sign In
        </Button>
        <p className="text-sm">
          Don't have an account?{" "}
          <span className="cursor-pointer font-semibold text-indigo-300 hover:underline">
            Sign up
          </span>
        </p>
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
    <Card {...args}>
      <CardHeader {...args}>
        <img
          src="https://assets.telegraphindia.com/telegraph/2024/Feb/1707386339_lisa-from-blackpink.jpg"
          alt="Lisa in black and white shirt"
          className={`w-${args.size} rounded-${args.radius}`}
        />
      </CardHeader>
      <CardBody {...args}>
        <h1 className="text-2xl font-bold">Lalisa Manobal aka LISA</h1>
        <p className="mt-2 text-[1rem] opacity-90">
          Lisa from BLACKPINK is a talented rapper, dancer, and fashion icon,
          known for her charisma, versatility, and global influence.
        </p>
      </CardBody>
      <CardFooter {...args} className="flex justify-start">
        <Button color="primary">Read more</Button>
      </CardFooter>
    </Card>
  ),
};

// New More cards

// Basic Card Example : Tommy Vercetti
export const SimpleCardNew: Story = {
  args: {
    color: "light",
    size: "lg",
    radius: "lg",
    shadow: "lg",
  },
  render: (args) => (
    <Card
      className="mx-auto overflow-hidden rounded-lg p-0 shadow-pink-300"
      {...args}
    >
      <CardHeader
        className="p-3 flex items-center justify-between"
        {...args}
      >
        <img
          src="https://wallpaperaccess.com/full/3292902.jpg"
          alt="Tommy Vercetti"
          className="rounded-lg object-cover shadow-lg"
        />
      </CardHeader>

      <CardBody className="p-4" {...args}>
        <h3 className="text-xl font-bold">Tommy Vercetti</h3>
        <p className="my-2">
          Tommy Vercetti is the main protagonist of *Grand Theft Auto: Vice
          City*. A former mobster for the Forelli family, Tommy was sent to Vice
          City to expand the family's operations — but he ends up carving out
          his own empire instead.
        </p>
      </CardBody>

      <CardFooter className="p-3" {...args}>
        <p className="text-sm italic">
          "I poked my head out of the gutter for one freakin' second and fate
          shovels shit in my face."
        </p>
      </CardFooter>
    </Card>
  ),
};

// Product Card
export const ProductCard: Story = {
  args: {
    color: "light",
    size: "md",
    radius: "xl",
    shadow: "lg",
  },
  render: (args) => (
    <Card {...args} className="max-w-xs">
      <div className="relative h-48 bg-gray-200">
        <div className="absolute top-2 right-2 rounded-md bg-red-500 px-2 py-1 text-xs text-white">
          SALE
        </div>
      </div>
      <CardBody {...args} className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Premium Headphones</h3>
          <span className="text-lg font-bold">$129.99</span>
        </div>
        <p className="text-sm text-gray-600">
          Wireless noise-cancelling headphones with premium sound quality.
        </p>
        <div className="flex text-yellow-400">
          <span>★★★★☆</span>
          <span className="ml-1 text-xs text-gray-500">(42)</span>
        </div>
        <button className="w-full rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700">
          Add to Cart
        </button>
      </CardBody>
    </Card>
  ),
};

// Profile Card
export const ProfileCard: Story = {
  args: {
    color: "light",
    size: "md",
    radius: "xl",
    shadow: "lg",
  },
  render: (args) => (
    <Card {...args} className="max-w-xs text-center">
      <CardBody {...args} className="flex flex-col items-center space-y-4">
        <div className="mb-2 h-24 w-24 rounded-full bg-gray-300"></div>
        <div>
          <h3 className="text-xl font-bold">Jane Doe</h3>
          <p className="text-sm text-blue-600">Product Designer</p>
        </div>
        <p className="text-sm text-gray-600">
          User experience designer specializing in mobile applications and
          design systems.
        </p>
        <div className="flex space-x-2">
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
            Figma
          </span>
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
            UI/UX
          </span>
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
            Design
          </span>
        </div>
        <div className="flex space-x-3 pt-2">
          <button className="flex-1 rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700">
            Follow
          </button>
          <button className="flex-1 rounded-md border border-gray-300 py-2 transition-colors hover:bg-gray-100">
            Message
          </button>
        </div>
      </CardBody>
    </Card>
  ),
};

// Dashboard Stat Card
export const StatCard: Story = {
  args: {
    color: "light",
    size: "md",
    radius: "lg",
    shadow: "md",
  },
  render: (args) => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card {...args} className="border-l-4 border-green-500">
        <CardBody {...args} className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h3 className="text-2xl font-bold">$24,345</h3>
            <p className="text-xs text-green-500">+12% from last month</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <span className="text-xl text-green-500">$</span>
          </div>
        </CardBody>
      </Card>
      <Card {...args} className="border-l-4 border-blue-500">
        <CardBody {...args} className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">New Users</p>
            <h3 className="text-2xl font-bold">1,254</h3>
            <p className="text-xs text-blue-500">+5% from last month</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <span className="text-xl text-blue-500">👤</span>
          </div>
        </CardBody>
      </Card>
      <Card {...args} className="border-l-4 border-purple-500">
        <CardBody {...args} className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Conversion Rate</p>
            <h3 className="text-2xl font-bold">3.2%</h3>
            <p className="text-xs text-purple-500">+0.5% from last month</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
            <span className="text-xl text-purple-500">%</span>
          </div>
        </CardBody>
      </Card>
    </div>
  ),
};

// Blog Post Card
export const BlogCard: Story = {
  args: {
    color: "light",
    size: "md",
    radius: "lg",
    shadow: "lg",
  },
  render: (args) => (
    <Card {...args} className="max-w-md">
      <div className="h-48 bg-gray-200"></div>
      <CardBody {...args}>
        <div className="mb-2 flex items-center space-x-2">
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
            Technology
          </span>
          <span className="text-xs text-gray-500">5 min read</span>
        </div>
        <h3 className="mb-2 text-xl font-bold">
          The Future of React Development
        </h3>
        <p className="mb-4 text-gray-600">
          Explore the latest features in React 19 and how they will change the
          way we build modern web applications.
        </p>
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <div>
            <p className="text-sm font-medium">Alex Johnson</p>
            <p className="text-xs text-gray-500">April 12, 2025</p>
          </div>
        </div>
      </CardBody>
    </Card>
  ),
};

// Pricing Card
export const PricingCard: Story = {
  args: {
    color: "light",
    size: "lg",
    radius: "xl",
    shadow: "xl",
  },
  render: (args) => (
    <div className="flex space-x-4">
      <Card {...args} className="max-w-xs flex-1">
        <CardHeader {...args} className="text-center">
          <p className="text-sm tracking-wider text-gray-500 uppercase">
            Starter
          </p>
          <div className="mt-2">
            <span className="text-3xl font-bold">$19</span>
            <span className="text-sm text-gray-500">/month</span>
          </div>
        </CardHeader>
        <CardBody {...args}>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>Up to 5 users</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>10GB storage</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>Basic support</span>
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">✗</span>
              <span>Advanced features</span>
            </li>
          </ul>
        </CardBody>
        <CardFooter {...args} className="text-center">
          <button className="w-full rounded-md border border-blue-600 py-2 text-blue-600 transition-colors hover:bg-blue-50">
            Choose Plan
          </button>
        </CardFooter>
      </Card>

      <Card {...args} className="max-w-xs flex-1 text-white">
        <CardHeader {...args} className="border-b border-blue-500 text-center">
          <p className="text-sm tracking-wider text-blue-200 uppercase">Pro</p>
          <div className="mt-2">
            <span className="text-3xl font-bold">$49</span>
            <span className="text-sm text-blue-200">/month</span>
          </div>
        </CardHeader>
        <CardBody {...args}>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-blue-200">✓</span>
              <span>Up to 20 users</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-200">✓</span>
              <span>50GB storage</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-200">✓</span>
              <span>Priority support</span>
            </li>

            <li className="flex items-center">
              <span className="mr-2 text-blue-200">✓</span>
              <span>Advanced features</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-200">✗</span>
              <span>Custom integrations</span>
            </li>

            <li className="flex items-center text-gray-400">
              <span className="mr-2">✗</span>
              <span>Dedicated support</span>
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">✗</span>
              <span>Advanced analytics</span>
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">✗</span>
              <span>Custom branding</span>
            </li>
          </ul>
        </CardBody>
        <CardFooter {...args} className="border-t border-blue-500 text-center">
          <button className="w-full rounded-md bg-white py-2 text-blue-600 transition-colors hover:bg-blue-50">
            Choose Plan
          </button>
        </CardFooter>
      </Card>
    </div>
  ),
};

// Dark Mode Card
export const DarkCard: Story = {
  args: {
    color: "dark",
    size: "lg",
    radius: "lg",
    shadow: "xl",
  },
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <CardHeader {...args} className="border-b border-gray-700">
        <h3 className="text-xl font-bold">Feature Overview</h3>
      </CardHeader>
      <CardBody {...args}>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600">
              <span>⚡</span>
            </div>
            <div>
              <h4 className="font-medium">Lightning Fast</h4>
              <p className="text-sm text-gray-400">
                Optimized performance with sub-second load times.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600">
              <span>🔒</span>
            </div>
            <div>
              <h4 className="font-medium">Secure by Default</h4>
              <p className="text-sm text-gray-400">
                Enterprise-grade security with end-to-end encryption.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
              <span>🔄</span>
            </div>
            <div>
              <h4 className="font-medium">Real-time Updates</h4>
              <p className="text-sm text-gray-400">
                Always stay in sync with real-time data refreshes.
              </p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter {...args} className="border-t border-gray-700">
        <button className="w-full rounded-md bg-purple-600 py-2 text-white transition-colors hover:bg-purple-700">
          Learn More
        </button>
      </CardFooter>
    </Card>
  ),
};

// Gradient Card
export const GradientCard: Story = {
  args: {
    size: "lg",
    radius: "xl",
    shadow: "xl",
  },
  render: (args) => (
    <div className="rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 p-0.5">
      <Card
        {...args}
        className="h-full max-w-sm bg-white dark:bg-gray-800"
        color="light"
      >
        <CardHeader {...args} className="text-center">
          <h3 className="text-2xl font-bold">Premium Plan</h3>
          <p className="text-gray-500">For growing businesses</p>
        </CardHeader>
        <CardBody {...args}>
          <div className="mb-6 text-center">
            <span className="text-4xl font-bold">$89</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>Unlimited users</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>500GB storage</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>24/7 support</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>Custom integrations</span>
            </li>
          </ul>
        </CardBody>
        <CardFooter {...args} className="text-center">
          <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 py-3 text-white transition-opacity hover:opacity-90">
            Get Started
          </button>
        </CardFooter>
      </Card>
    </div>
  ),
};

// Notification Card
export const NotificationCard: Story = {
  args: {
    color: "light",
    size: "md",
    radius: "lg",
    shadow: "md",
  },
  render: (args) => (
    <div className="max-w-md space-y-4">
      <Card {...args} className="border-l-4 border-blue-500">
        <CardBody {...args} className="flex items-center space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <span className="text-blue-500">ℹ️</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium">Information</h4>
            <p className="text-sm text-gray-600">
              Your account has been successfully updated.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </CardBody>
      </Card>

      <Card {...args} className="border-l-4 border-green-500">
        <CardBody {...args} className="flex items-center space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <span className="text-green-500">✓</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium">Success</h4>
            <p className="text-sm text-gray-600">
              Your payment has been processed successfully.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </CardBody>
      </Card>

      <Card {...args} className="border-l-4 border-yellow-500">
        <CardBody {...args} className="flex items-center space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
            <span className="text-yellow-500">⚠️</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium">Warning</h4>
            <p className="text-sm text-gray-600">
              Your subscription will expire in 3 days.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </CardBody>
      </Card>
    </div>
  ),
};

// 1. Asymmetric Product Card
export const AsymmetricProductCard: Story = {
  args: {
    color: "light",
    radius: "xl",
    shadow: "xl",
  },
  render: (args) => (
    <Card {...args} className="relative max-w-sm overflow-visible">
      <div className="flex flex-col md:flex-row">
        {/* Left asymmetric content */}
        <div className="w-full pr-0 md:w-1/2 md:pr-4">
          <CardBody className="py-6">
            <h3 className="mb-2 text-xl font-bold">Aero Headphones</h3>
            <div className="mb-4 flex items-center">
              <div className="mr-2 h-1 w-8 rounded-full bg-blue-600"></div>
              <span className="text-sm text-gray-500">Premium Audio</span>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              Immersive sound quality with active noise cancellation and spatial
              audio.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">$199</span>
              <button className="rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </CardBody>
        </div>

        {/* Right asymmetric circle image */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/4 -translate-y-1/4 transform rounded-full bg-blue-500 opacity-20"></div>
          <div className="flex h-full items-center justify-center rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gray-100 p-4">
            <div className="h-24 w-24 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Bottom feature dots */}
      <div className="absolute -bottom-3 left-6 flex space-x-1">
        <div className="h-6 w-16 rounded-full bg-blue-600"></div>
        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
      </div>
    </Card>
  ),
};

export const DiagonalSplitCard: Story = {
  args: {
    radius: "lg",
    shadow: "xl",
    color: "light",
  },
  render: (args) => (
    <Card {...args} className="max-w-md overflow-hidden p-0">
      <div className="relative">
        {/* Background split with diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-indigo-900"></div>
        <div
          className="absolute bg-white"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 40% 0)",
            width: "100%",
            height: "100%",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <div className="flex min-h-64 flex-col">
            <div className="flex-1">
              <div className="mb-8 flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-800">
                  <span className="text-xl text-white">✨</span>
                </div>
              </div>

              <div className="mb-6 text-right">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  AI Conference
                </h3>
                <p className="text-sm text-purple-200">
                  The future of artificial intelligence
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">Date</span>
                  <span className="text-gray-600">June 15-17, 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">Location</span>
                  <span className="text-gray-600">San Francisco, CA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">Price</span>
                  <span className="text-gray-600">$899</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 rounded-lg bg-purple-800 py-2 text-white transition-colors hover:bg-purple-900">
                  Register Now
                </button>
                <button className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-gray-300">
                  <span>♡</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  ),
};

// 4. Neumorphic Weather Card
export const NeumorphicWeatherCard: Story = {
  args: {
    color: "light",
    radius: "xl",
    shadow: "none",
  },
  render: (args) => (
    <Card {...args} className="relative max-w-xs bg-gray-100 p-0">
      <div className="p-6">
        {/* Inner neumorphic elements */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800">San Francisco</h3>
            <p className="text-sm text-gray-500">Wednesday, 16 Apr</p>
          </div>

          {/* Neumorphic button */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff]">
            <span className="text-gray-600">⋮</span>
          </div>
        </div>

        {/* Weather info with neumorphic container */}
        <div className="mb-8 rounded-2xl px-4 py-6 shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-5xl font-light text-gray-800">72°</span>
              <p className="text-sm text-gray-500">Feels like 75°</p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff]">
              <span className="text-2xl">☀️</span>
            </div>
          </div>

          <div className="mt-4 flex items-center text-sm text-gray-600">
            <span>Sunny · Humidity 45% · Wind 7 mph</span>
          </div>
        </div>

        {/* Daily forecast */}
        <div className="grid grid-cols-5 gap-2">
          {["Thu", "Fri", "Sat", "Sun", "Mon"].map((day, i) => (
            <div key={day} className="flex flex-col items-center">
              <span className="text-xs text-gray-500">{day}</span>
              <div className="my-2 text-lg">
                {i === 2 ? "🌧️" : i === 4 ? "⛅" : "☀️"}
              </div>
              <span className="text-xs font-medium">
                {70 + Math.floor(Math.random() * 10)}°
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  ),
};

// 5. Glassmorphism Event Card
export const GlassmorphismEventCard: Story = {
  args: {
    radius: "lg",
    shadow: "none",
    color: "light",
  },
  render: (args) => (
    <div className="relative flex h-96 w-96 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-8">
      {/* Background circles */}
      <div className="absolute top-12 left-12 h-32 w-32 rounded-full bg-white opacity-30 blur-xl"></div>
      <div className="absolute right-12 bottom-24 h-24 w-24 rounded-full bg-pink-300 opacity-40 blur-xl"></div>

      {/* Glassmorphism card */}
      <Card
        {...args}
        className="relative z-10 mx-auto max-w-xs border border-white/30 bg-white/20 backdrop-blur-lg"
      >
        <CardHeader
          {...args}
          className="flex items-center justify-between border-b border-white/20 text-white"
        >
          <div>
            <h3 className="text-xl font-bold">Music Festival</h3>
            <div className="flex items-center text-xs opacity-80">
              <span className="mr-2">●</span>
              <span>Live Event</span>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm">
            <span>♫</span>
          </div>
        </CardHeader>

        <CardBody {...args} className="text-white">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                <span>📅</span>
              </div>
              <div>
                <p className="text-sm opacity-80">Date & Time</p>
                <p className="font-medium">May 22, 2025 · 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                <span>📍</span>
              </div>
              <div>
                <p className="text-sm opacity-80">Location</p>
                <p className="font-medium">Central Park, New York</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm opacity-80">Tickets Remaining</span>
              <span className="text-sm">40%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </CardBody>

        <CardFooter {...args} className="border-t border-white/20">
          <button className="w-full rounded-lg bg-white/20 py-2.5 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30">
            Buy Tickets
          </button>
        </CardFooter>
      </Card>
    </div>
  ),
};

// 6. 3D Perspective Product Card
export const PerspectiveProductCard: Story = {
  args: {
    color: "light",
    radius: "lg",
    shadow: "xl",
  },
  render: (args) => (
    <div className="perspective-card h-96 w-72">
      <Card
        {...args}
        className="preserve-3d hover:transform-style-preserve-3d h-full w-full transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-y-30 hover:shadow-2xl"
      >
        {/* Front side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-1/2 rounded-t-lg bg-gradient-to-br from-blue-400 to-purple-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-36 w-36 translate-y-4 rotate-12 transform rounded-xl bg-gray-200 shadow-lg"></div>
          </div>

          <CardBody
            {...args}
            className="absolute right-0 bottom-0 left-0 h-1/2"
          >
            <div className="mt-12">
              <div className="flex items-end justify-between">
                <h3 className="text-xl font-bold">Neo Watch Pro</h3>
                <span className="text-lg font-medium text-blue-600">$399</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Smart watch with health monitoring and 7-day battery life
              </p>

              <div className="mt-4 flex space-x-2">
                <div className="h-5 w-5 rounded-full border-2 border-white bg-blue-500"></div>
                <div className="h-5 w-5 rounded-full border-2 border-white bg-black"></div>
                <div className="h-5 w-5 rounded-full border-2 border-white bg-gray-300"></div>
              </div>

              <button className="mt-6 w-full rounded-lg bg-black py-2.5 font-medium text-white transition-colors hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </CardBody>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 rotate-y-180 transform backface-hidden">
          <CardBody {...args} className="flex h-full flex-col">
            <h3 className="mb-4 text-center text-xl font-bold">
              Product Specs
            </h3>

            <div className="flex-1 space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Display</span>
                <span className="font-medium">1.78" AMOLED</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Battery</span>
                <span className="font-medium">410 mAh</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Water Resistant</span>
                <span className="font-medium">5 ATM</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Connectivity</span>
                <span className="font-medium">Bluetooth 5.2</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Sensors</span>
                <span className="font-medium">HR, SpO2, GPS</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors hover:bg-blue-700">
              View Details
            </button>
          </CardBody>
        </div>
      </Card>

      {/* Add needed styles for 3D perspective */}
      <style>{`
        .perspective-card {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-30 {
          transform: rotateY(30deg);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  ),
};

// 7. Animated Gradient Border Card
export const AnimatedGradientBorderCard: Story = {
  args: {
    color: "dark",
    radius: "xl",
    shadow: "xl",
  },
  render: (args) => (
    <div className="relative max-w-sm overflow-hidden rounded-xl p-0.5">
      {/* Animated gradient border */}
      <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

      <Card {...args} className="relative rounded-xl bg-gray-900 p-0">
        <CardHeader
          {...args}
          className="flex items-center justify-between border-b border-gray-700"
        >
          <h3 className="text-xl font-bold">Premium Access</h3>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
            <span className="text-sm text-white">✓</span>
          </div>
        </CardHeader>

        <CardBody {...args}>
          <p className="mb-6 text-gray-400">
            Unlock all premium features with our exclusive membership plan.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                <span className="text-xs text-white">✓</span>
              </div>
              <span>Unlimited project access</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                <span className="text-xs text-white">✓</span>
              </div>
              <span>Priority customer support</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                <span className="text-xs text-white">✓</span>
              </div>
              <span>Early access to new features</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                <span className="text-xs text-white">✓</span>
              </div>
              <span>Custom exports in all formats</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-center">
              <span className="text-3xl font-bold">$19</span>
              <span className="mb-1 ml-1 self-end text-gray-400">/month</span>
            </div>
            <p className="text-center text-sm text-gray-400">Billed annually</p>
          </div>
        </CardBody>

        <CardFooter {...args} className="border-t border-gray-700">
          <button className="w-full rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 py-3 font-medium text-white transition-opacity hover:opacity-90">
            Get Started
          </button>
        </CardFooter>
      </Card>

      {/* Add animation styles */}
      <style>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  ),
};

// 8. Radial Pattern Achievement Card
export const RadialPatternCard: Story = {
  args: {
    color: "light",
    radius: "lg",
    shadow: "lg",
  },
  render: (args) => (
    <Card {...args} className="relative max-w-xs overflow-hidden p-0">
      {/* Radial background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="radial-repeating-pattern absolute top-0 left-0 h-full w-full bg-black"></div>
      </div>

      {/* Card content with overlapping elements */}
      <div className="relative z-10">
        <div className="px-6 pt-6 pb-10">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold">Achievement</h3>
              <p className="text-sm text-gray-500">April 16, 2025</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
              <span className="text-xl text-amber-600">🏆</span>
            </div>
          </div>

          {/* Achievement details */}
          <div className="mb-4 text-center">
            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
              <span className="text-4xl text-amber-600">🎉</span>
            </div>
            <h4 className="text-2xl font-bold">Congratulations!</h4>
            <p className="mt-2 text-sm text-gray-500">
              You have completed the challenge successfully.
            </p>
          </div>
          <div className="mb-6 flex justify-center">
            <div className="h-4 w-4 rounded-full border-2 border-white bg-amber-100"></div>
            <div className="-ml-2 h-4 w-4 rounded-full border-2 border-white bg-gray-300"></div>
            <div className="-ml-2 h-4 w-4 rounded-full border-2 border-white bg-gray-300"></div>
            <div className="-ml-2 h-4 w-4 rounded-full border-2 border-white bg-gray-300"></div>
            <div className="-ml-2 h-4 w-4 rounded-full border-2 border-white bg-gray-300"></div>
            <div className="-ml-2 h-4 w-4 rounded-full border-2 border-white bg-gray-300"></div>
          </div>

          <div className="text-center">
            <span className="text-4xl font-bold text-amber-600">100%</span>
            <span className="text-sm text-gray-500">
              {" "}
              of the challenge completed
            </span>
          </div>
        </div>

        <CardFooter {...args} className="border-t border-gray-200">
          <button className="w-full rounded-lg bg-amber-600 py-3 font-medium text-white transition-colors hover:bg-amber-700">
            Share Achievement
          </button>
        </CardFooter>
      </div>
    </Card>
  ),
};

function useState<T>(initialValue: T): [T, (value: T) => void] {
  let state = initialValue;
  const setState = (value: T) => {
    state = value;
  };
  return [state, setState];
}

// 1. Modern Login Card
export const LoginCard: Story = {
  args: {
    color: "light",
    radius: "xl",
    shadow: "xl",
    size: "lg",
  },
  render: (args) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
      <Card {...args} className="mx-auto max-w-md">
        <CardHeader {...args} className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
            <span className="text-xl text-white">🔒</span>
          </div>
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="mt-1 text-gray-500">
            Sign in to continue to your account
          </p>
        </CardHeader>

        <CardBody {...args}>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500">✉️</span>
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500">🔑</span>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <button className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </CardBody>

        <CardFooter {...args} className="border-t border-gray-100 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Sign up
            </a>
          </p>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50">
                <span>G</span>
              </button>
              <button className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50">
                <span>f</span>
              </button>
              <button className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50">
                <span>in</span>
              </button>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  },
};

// 2. Modern Signup Card
export const SignupCard: Story = {
  args: {
    color: "light",
    radius: "xl",
    shadow: "xl",
    size: "lg",
  },
  render: (args) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [step, setStep] = useState(1);

    return (
      <Card {...args} className="mx-auto max-w-md">
        <CardHeader {...args} className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 1 ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-300 text-gray-400"}`}
              >
                1
              </div>
              <div className="absolute top-5 right-0 h-0.5 w-12 translate-x-full transform bg-gray-200"></div>
            </div>
            <div className="relative mx-12">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 2 ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-300 text-gray-400"}`}
              >
                2
              </div>
              <div className="absolute top-5 right-0 h-0.5 w-12 translate-x-full transform bg-gray-200"></div>
            </div>
            <div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 3 ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-300 text-gray-400"}`}
              >
                3
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold">Create an Account</h2>
          <p className="mt-1 text-gray-500">
            {step === 1
              ? "Personal Information"
              : step === 2
                ? "Account Security"
                : "Final Steps"}
          </p>
        </CardHeader>

        <CardBody {...args}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="signup-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="signup-password"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  id="signup-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-2">
                <div className="flex items-center">
                  <div className="flex h-5 items-center">
                    <input
                      id="password-strength"
                      type="checkbox"
                      checked
                      readOnly
                      className="h-4 w-4 rounded border-gray-300 text-green-500"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label
                      htmlFor="password-strength"
                      className="font-medium text-gray-700"
                    >
                      At least 8 characters
                    </label>
                  </div>
                </div>

                <div className="mt-2 flex items-center">
                  <div className="flex h-5 items-center">
                    <input
                      id="password-number"
                      type="checkbox"
                      checked={/\d/.test(password)}
                      readOnly
                      className="h-4 w-4 rounded border-gray-300 text-green-500"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label
                      htmlFor="password-number"
                      className="font-medium text-gray-700"
                    >
                      At least 1 number
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-lg border border-gray-300 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 flex h-5 items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={() => setAgreeToTerms(!agreeToTerms)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="mb-2 text-sm font-medium text-gray-800">
                  Choose your preferences:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600"
                    />
                    <label
                      htmlFor="newsletter"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="updates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600"
                    />
                    <label
                      htmlFor="updates"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Receive product updates and tips
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 rounded-lg border border-gray-300 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  disabled={!agreeToTerms}
                  className={`flex-1 rounded-lg py-2 font-medium transition-colors duration-300 ${agreeToTerms ? "bg-blue-600 text-white hover:bg-blue-700" : "cursor-not-allowed bg-gray-300 text-gray-500"}`}
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </CardBody>

        <CardFooter {...args} className="border-t border-gray-100 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </CardFooter>
      </Card>
    );
  },
};

// 3-A. Feedback Card - Rating Style
export const FeedbackRatingCard: Story = {
  args: {
    color: "light",
    radius: "xl",
    shadow: "lg",
    size: "lg",
  },
  render: (args) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      if (rating > 0) {
        setSubmitted(true);
      }
    };

    return (
      <Card {...args} className="mx-auto max-w-md">
        {!submitted ? (
          <>
            <CardHeader {...args} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <span className="text-xl">💬</span>
              </div>
              <h2 className="text-2xl font-bold">How was your experience?</h2>
              <p className="mt-1 text-gray-500">
                Your feedback helps us improve our service
              </p>
            </CardHeader>

            <CardBody {...args}>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors focus:outline-none ${
                          (hoverRating || rating) >= star
                            ? "text-yellow-400 hover:text-yellow-500"
                            : "text-gray-300 hover:text-gray-400"
                        }`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      >
                        <span className="text-2xl">★</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="feedback"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 p-3 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Tell us what you liked or how we can improve..."
                  ></textarea>
                  <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                    {comment.length}/500
                  </div>
                </div>

                <div className="pt-2">
                  <p className="mb-2 text-sm text-gray-500">
                    Would you recommend us to others?
                  </p>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        id="recommend-yes"
                        type="radio"
                        name="recommend"
                        className="h-4 w-4 border-gray-300 text-purple-600"
                      />
                      <label
                        htmlFor="recommend-yes"
                        className="ml-2 text-sm text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="recommend-no"
                        type="radio"
                        name="recommend"
                        className="h-4 w-4 border-gray-300 text-purple-600"
                      />
                      <label
                        htmlFor="recommend-no"
                        className="ml-2 text-sm text-gray-700"
                      >
                        No
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="recommend-maybe"
                        type="radio"
                        name="recommend"
                        className="h-4 w-4 border-gray-300 text-purple-600"
                      />
                      <label
                        htmlFor="recommend-maybe"
                        className="ml-2 text-sm text-gray-700"
                      >
                        Maybe
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={rating === 0}
                  className={`w-full rounded-lg py-2 font-medium transition-colors duration-300 ${
                    rating > 0
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "cursor-not-allowed bg-gray-300 text-gray-500"
                  }`}
                >
                  Submit Feedback
                </button>
              </div>
            </CardBody>
          </>
        ) : (
          <CardBody {...args} className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Thank You!</h2>
            <p className="mx-auto max-w-xs text-gray-600">
              We appreciate your feedback. It helps us improve our service for
              you and other customers.
            </p>
            <button
              onClick={() => {
                setRating(0);
                setComment("");
                setSubmitted(false);
              }}
              className="mt-6 font-medium text-purple-600 hover:text-purple-800"
            >
              Send another feedback
            </button>
          </CardBody>
        )}
      </Card>
    );
  },
};
