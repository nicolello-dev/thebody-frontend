import { Meta, StoryObj } from "@storybook/nextjs";

import { SidePanel } from "./index";

const meta = {
  component: SidePanel,
} satisfies Meta<typeof SidePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const sidepanel: Story = {
  args: {},
};
