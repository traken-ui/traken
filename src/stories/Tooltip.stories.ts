import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "src/components/tooltip/Tooltip";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Tooltip>;

const meta: Meta<StoryProps> = {
    component: Tooltip,
    argTypes: {
        position: {
            control: {
                type: "radio",
                options: ["top", "bottom", "left", "right"],
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        text: "Tooltip text",
        position: "top",
    },
};

export const Bottom: Story = {
    args: {
        text: "Tooltip text",
        position: "bottom",
    },
};