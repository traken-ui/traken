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
import Button from "src/components/button/Button";

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
  render: (args) => {
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
                This is a demo modal. You can customize its content, size, and
                appearance using the props.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
  },
};

export const CookieConsent: Story = {
  args: {
    color: "light",
    size: "lg",
    radius: "xl",
    shadow: "lg",
    variant: "popup",
    position: "bottom",
    overlayColor: "dark",
    animation: "slide",
  },
  render: (args) => {
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

        <Modal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <ModalContent>
            <ModalBody className="p-2">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-bold opacity-80">
                    We value your privacy
                  </h3>
                  <p className="mt-2 text-sm">
                    We use cookies to enhance your browsing experience, serve
                    personalized ads or content, and analyze our traffic. By
                    clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-gray-200 transition duration-200 hover:bg-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Accept All
                    </button>
                    <button className="cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition duration-200 hover:bg-gray-300">
                      Essential Only
                    </button>
                    <button className="cursor-pointer px-4 py-2 text-blue-500 hover:underline">
                      Cookie Settings
                    </button>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const SocialShare: Story = {
  args: {
    color: "base",
    size: "lg",
    radius: "md",
    shadow: "lg",
    variant: "popup",
    position: "center",
    overlayColor: "dark",
    animation: "fade",
  },
  render: (args) => {
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

        <Modal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <ModalContent className="overflow-hidden">
            <ModalHeader className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Share</h2>
            </ModalHeader>
            <ModalBody className="mt-4 flex flex-col gap-4">
              <p>Share links via</p>
              <div className="flex flex-wrap gap-4">
                <span>FB</span>
                <span>Twitter</span>
                <span>LinkedIn</span>
                <span>WhatsApp</span>
                <span>Instagram</span>
              </div>
            </ModalBody>
            <ModalFooter className="flex flex-col gap-4 items-start">
              <p className="text-left mt-4 text-sm">
                Or copy the link to share
              </p>
              <button
                className="w-full rounded-md border-gray-300 bg-white px-4 py-2 text-gray-800 transition duration-200 hover:bg-gray-100"
                onClick={() => {
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText("https://example.com").then(
                      () => {
                        alert("Link copied to clipboard!");
                      },
                      (err) => {
                        console.error("Failed to copy: ", err);
                      }
                    );
                  } else {
                    const textArea = document.createElement("textarea");
                    textArea.value = "https://example.com";
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                      document.execCommand("copy");
                      alert("Link copied to clipboard!");
                    } catch (err) {
                      console.error("Fallback: Failed to copy: ", err);
                    }
                    document.body.removeChild(textArea);
                  }
                  setIsOpen(false);
                }}
              >
                Copy Link
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const NewsLetter: Story = {
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
  render: (args) => {
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

        <Modal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <ModalContent>
            <ModalBody className="overflow-hidden p-0">
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center bg-blue-600 p-8 text-white md:w-2/5">
                  <div>
                    <svg
                      className="mx-auto h-16 w-16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <h3 className="mt-4 text-center text-xl font-bold">
                      Stay Updated
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:w-3/5">
                  <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <h4 className="mb-1 text-xl font-bold">
                    Join our newsletter
                  </h4>
                  <p className="mb-4 text-gray-600">
                    Get exclusive deals, updates and more
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="flex items-start">
                      <input
                        id="newsletter-terms"
                        type="checkbox"
                        className="mt-1 h-4 w-4 text-blue-600"
                      />
                      <label
                        htmlFor="newsletter-terms"
                        className="ml-2 block text-sm text-gray-600"
                      >
                        I agree to receive newsletters and accept the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          privacy policy
                        </a>
                      </label>
                    </div>

                    <button className="w-full rounded-md bg-blue-600 py-2 text-white transition duration-200 hover:bg-blue-700">
                      Subscribe Now
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      You can unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const Product: Story = {
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
  render: (args) => {
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

        <Modal
          {...args}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <ModalContent>
            <ModalBody className="overflow-hidden p-0">
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center bg-gray-100 p-8 md:w-1/2">
                  <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-lg bg-white shadow-md">
                    {/* Product image placeholder */}
                    <img
                      src="/api/placeholder/400/400"
                      alt="Product"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-8 md:w-1/2">
                  <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <span className="mb-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    NEW ARRIVAL
                  </span>

                  <h3 className="mb-2 text-2xl font-bold">
                    Premium Wireless Headphones
                  </h3>

                  <div className="mb-2 flex items-center">
                    <div className="flex text-yellow-400">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">(124 reviews)</span>
                  </div>

                  <div className="mb-6 flex items-center">
                    <span className="text-3xl font-bold text-gray-900">
                      $299.99
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      $399.99
                    </span>
                    <span className="ml-2 rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-700">
                      SAVE 25%
                    </span>
                  </div>

                  <p className="mb-6 text-gray-700">
                    Experience premium sound quality with our latest wireless
                    headphones. Featuring active noise cancellation, 40-hour
                    battery life, and memory foam ear cushions for all-day
                    comfort.
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-2 font-medium">Color</h4>
                    <div className="flex space-x-2">
                      <button className="h-8 w-8 rounded-full bg-black ring-2 ring-blue-500 ring-offset-2"></button>
                      <button className="h-8 w-8 rounded-full border border-gray-300 bg-white"></button>
                      <button className="h-8 w-8 rounded-full bg-blue-600"></button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                    <button className="flex-grow rounded-md bg-blue-600 px-6 py-2 text-white transition duration-200 hover:bg-blue-700">
                      Add to Cart
                    </button>
                    <button className="flex-grow rounded-md bg-gray-200 px-6 py-2 text-gray-800 transition duration-200 hover:bg-gray-300">
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
