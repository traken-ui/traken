import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Skeleton from "../components/skeleton/Skeleton";
import { skeletonVariants } from "../components/skeleton/SkeletonVariants"; // Fixed typo
import React from "react";

type StoryProps = ComponentProps<typeof Skeleton> & {
  skeletonWidth?: string;
  skeletonHeight?: string;
};

const meta: Meta<StoryProps> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    speed: {
      control: "select",
      options: ["slow", "normal", "fast"],
      description: "Speed of the pulsing animation",
    },
    color: {
      control: "select",
      options: ["light", "dark", "primary", "secondary"],
      description: "Color of the skeleton",
    },
    isLoading: {
      control: "boolean",
      description: "Whether the skeleton is currently in the loading state",
    },
    disableAnimation: {
      control: "boolean",
      description: "Whether to disable the pulsing animation",
    },
    skeletonWidth: {
      control: "text",
      description:
        'Custom width of the skeleton (e.g., "100px", "5rem", "w-1/2")',
    },
    skeletonHeight: {
      control: "text",
      description:
        'Custom height of the skeleton (e.g., "20px", "2rem", "h-8")',
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Define a reusable rendering function
const renderSkeletons = (args: StoryProps) => {
  // We'll use inline styles on wrapper divs instead of directly on the Skeleton components
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div
          style={{
            width: args.skeletonWidth || "40px",
            height: args.skeletonHeight || "40px",
          }}
        >
          <Skeleton
            speed={args.speed}
            color={args.color}
            isLoading={args.isLoading}
            disableAnimation={args.disableAnimation}
            className="h-full w-full rounded-full"
          />
        </div>
        <div>
          <div style={{ width: "120px", height: "16px" }}>
            <Skeleton
              speed={args.speed}
              color={args.color}
              isLoading={args.isLoading}
              disableAnimation={args.disableAnimation}
              className="h-full w-full"
            />
          </div>
          <div style={{ width: "80px", height: "12px" }}>
            <Skeleton
              speed={args.speed}
              color={args.color}
              isLoading={args.isLoading}
              disableAnimation={args.disableAnimation}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "200px" }}>
        <Skeleton
          speed={args.speed}
          color={args.color}
          isLoading={args.isLoading}
          disableAnimation={args.disableAnimation}
          className="h-full w-full rounded-md"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div style={{ width: "100%", height: "150px" }}>
              <Skeleton
                speed={args.speed}
                color={args.color}
                isLoading={args.isLoading}
                disableAnimation={args.disableAnimation}
                className="h-full w-full rounded-md"
              />
            </div>
            <div style={{ width: "80%", height: "12px" }}>
              <Skeleton
                speed={args.speed}
                color={args.color}
                isLoading={args.isLoading}
                disableAnimation={args.disableAnimation}
                className="h-full w-full"
              />
            </div>
            <div style={{ width: "60%", height: "12px" }}>
              <Skeleton
                speed={args.speed}
                color={args.color}
                isLoading={args.isLoading}
                disableAnimation={args.disableAnimation}
                className="h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: "60%", height: "16px" }}>
        <Skeleton
          speed={args.speed}
          color={args.color}
          isLoading={args.isLoading}
          disableAnimation={args.disableAnimation}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export const Default: Story = {
  args: {
    isLoading: true,
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        component:
          "A more comprehensive example showing multiple skeletons arranged to simulate loading content.",
      },
    },
  },
};

export const SlowSpeed: Story = {
  args: {
    isLoading: true,
    speed: "slow",
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        story: "Multiple skeletons with a slow pulsing animation.",
      },
    },
  },
};

export const FastSpeed: Story = {
  args: {
    isLoading: true,
    speed: "fast",
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        story: "Multiple skeletons with a fast pulsing animation.",
      },
    },
  },
};

export const DarkColor: Story = {
  args: {
    isLoading: true,
    color: "dark",
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        story: "Multiple skeletons with a dark background color.",
      },
    },
  },
};

export const PrimaryColor: Story = {
  args: {
    isLoading: true,
    color: "primary",
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        story: "Multiple skeletons with a primary background color.",
      },
    },
  },
};

export const SecondaryColor: Story = {
  args: {
    isLoading: true,
    color: "secondary",
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        story: "Multiple skeletons with a secondary background color.",
      },
    },
  },
};

export const NotLoading: Story = {
  args: {
    isLoading: false,
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        story:
          "Multiple skeletons when the loading state is false (should be invisible).",
      },
    },
  },
};

export const AnimationDisabled: Story = {
  args: {
    isLoading: true,
    disableAnimation: true,
  },
  render: renderSkeletons,
  parameters: {
    docs: {
      description: {
        story: "Multiple skeletons with the pulsing animation disabled.",
      },
    },
  },
};
