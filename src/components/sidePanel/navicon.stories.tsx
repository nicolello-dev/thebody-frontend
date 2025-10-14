import { Meta, StoryObj } from "@storybook/nextjs";

import { NavIcon } from "./navIcon";

const meta = {
  component: NavIcon,
} satisfies Meta<typeof NavIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const navicon: Story = {
  args: {
    onClick: () => {},
    children: (
      <svg width="64" height="64">
        <circle cx="32" cy="32" r="32" fill="currentColor" />
      </svg>
    ),
  },
};
