import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from '../components/Breadcrumbs/Breadcrumb';
import { HomeIcon, ChevronRightIcon } from '../components/Breadcrumbs/icons'; 

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: { type: 'select' },
      options: ['/', '>', '→', '•'],
      description: 'Separator between items',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'dark'],
      description: 'Color scheme',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Text size',
    },
    maxItems: {
      control: { type: 'number', min: 2, max: 10 },
      description: 'Max items before truncation',
    },
    collapseAfter: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Items to show before truncation',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

// Mock items
const baseItems = [
  { label: 'Home', href: '/', icon: <HomeIcon /> },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Smartphones', isCurrent: true },
];

const longPathItems = [
  { label: 'Home', href: '/' },
  { label: 'Library', href: '/library' },
  { label: 'Documents', href: '/library/docs' },
  { label: 'Projects', href: '/library/docs/projects' },
  { label: 'Client Work', href: '/library/docs/projects/clients' },
  { label: 'Acme Corp', isCurrent: true },
];

const longPathItemsWithDropdown = [
  { label: 'Home', href: '/' },
  { label: 'Library', href: '/library' },
  { label: 'Documents', href: '/library/docs' },
  { label: 'Projects', href: '/library/docs/projects' },
  { 
    label: 'More', 
    isDropdown: true, 
    dropdownItems: [
      { label: 'Client Work', href: '/library/docs/projects/clients' },
      { label: 'Acme Corp', isCurrent: true },
    ],
  },
];

// --- Stories ---

export const Default: Story = {
  args: {
    items: baseItems,
    separator: '/',
    color: 'default',
    size: 'md',
  },
};

export const PrimaryColor: Story = {
  args: {
    ...Default.args,
    color: 'primary',
  },
  name: 'Primary Color Scheme',
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
  name: 'Small Size',
};

export const WithCustomSeparator: Story = {
  args: {
    ...Default.args,
    separator: <ChevronRightIcon />,
  },
  name: 'Custom Separator (Icon)',
};

export const Truncated: Story = {
  args: {
    items: longPathItems,
    separator: '→',
    maxItems: 4,
    collapseAfter: 1,
  },
  name: 'Truncated with Ellipsis',
};

export const InteractiveExpand: Story = {
  args: {
    items: longPathItems,
    maxItems: 4,
    collapseAfter: 1,
  },
  name: 'Expandable (Interactive)',
};

export const TruncatedWithDropdown: Story = {
  args: {
    items: longPathItemsWithDropdown,
    separator: '→',
    maxItems: 4,
    collapseAfter: 1,
    variant: 'dropdown',
  },
  name: 'Truncated with Dropdown',
};

export const ExpandableInteractive: Story = {
  args: {
    items: longPathItems,
    maxItems: 4,
    collapseAfter: 1,
    variant: 'expand',
  },
  name: 'Expandable (Interactive)',
};