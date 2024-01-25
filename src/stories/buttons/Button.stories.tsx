// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../components/buttons/Button";

const meta = {
  title: "components/buttons/Button",
  parameters: {
    label: "Test Button",
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const SimpleButton = {
  args: {
    label: "Example",
  },
} satisfies Story;
