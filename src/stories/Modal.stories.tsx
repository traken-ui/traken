import { Meta, StoryObj } from "@storybook/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalTrigger,
} from "../components/modal/Modal";
import React, { useState } from "react";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
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
                "transparent",
                "light",
                "dark",
            ],
            description: "Color variant of the modal",
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
            description: "Size of the modal",
        },
        radius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
            description: "Border radius of the modal",
        },
        shadow: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl", "2xl", "inner"],
            description: "Shadow depth of the modal",
        },
        variant: {
            control: "select",
            options: ["popup", "drawer", "dialog"],
            description: "Variant style of the modal",
        },
        position: {
            control: "select",
            options: ["center", "top", "right", "bottom", "left"],
            description: "Position of the modal",
        },
        overlayColor: {
            control: "select",
            options: ["dark", "light", "blur", "none"],
            description: "Color of the overlay background",
        },
        animation: {
            control: "select",
            options: ["fade", "scale", "slide", "none"],
            description: "Animation effect of the modal",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = (args: React.ComponentProps<typeof Modal>) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex gap-4">
                <button
                    className="rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
                    onClick={() => setIsOpen(true)}
                >
                    Open Modal
                </button>
            </div>

            <Modal {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
                <ModalContent>
                    <ModalHeader>Modal Header</ModalHeader>
                    <ModalBody className="flex flex-col gap-4">
                        <p>Modal Body</p>
                        <p>
                            This is a demo modal. You can customize its content,
                            size, and appearance using the props.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <button
                            className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Confirm
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export const Default: Story = {
    args: {
        color: "base",
        size: "md",
        radius: "md",
        shadow: "lg",
        variant: "popup",
        position: "center",
        overlayColor: "dark",
        animation: "fade",
    },
    render: (args) => <ModalDemo {...args} />,
};

export const Primary: Story = {
    args: {
        color: "primary",
        size: "md",
        radius: "md",
        shadow: "lg",
        variant: "popup",
        position: "center",
        overlayColor: "dark",
        animation: "fade",
    },
    render: (args) => <ModalDemo {...args} />,
};

export const DrawerRight: Story = {
    args: {
        color: "base",
        size: "sm",
        radius: "md",
        shadow: "lg",
        variant: "drawer",
        position: "right",
        overlayColor: "dark",
        animation: "slide",
    },
    render: (args) => <ModalDemo {...args} />,
};

export const BottomSheet: Story = {
    args: {
        color: "base",
        size: "full",
        radius: "xl",
        shadow: "lg",
        variant: "drawer",
        position: "bottom",
        overlayColor: "dark",
        animation: "slide",
    },
    render: (args) => <ModalDemo {...args} />,
};

export const AlertDialog: Story = {
    args: {
        color: "danger",
        size: "sm",
        radius: "md",
        shadow: "xl",
        variant: "dialog",
        position: "center",
        overlayColor: "dark",
        animation: "scale",
    },
    render: (args) => <ModalDemo {...args} />,
};

export const GlassEffect: Story = {
    args: {
        color: "transparent",
        size: "md",
        radius: "xl",
        shadow: "xl",
        variant: "popup",
        position: "center",
        overlayColor: "light",
        animation: "fade",
    },
    render: (args) => <ModalDemo {...args} />,
};
