import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta = {
  title: "Typography/Text",
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is Typography",
  },
};
