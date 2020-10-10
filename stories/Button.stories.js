import React from "react";

import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = args => <Button {...args} />;

export const CTA = Template.bind({});
CTA.args = {
  primary: true,
  text: "Button",
};

export const GhostOne = Template.bind({});
GhostOne.args = {
  ghost: true,
  text: "Button",
};

export const GhostTwo = Template.bind({});
GhostTwo.args = {
  primary: true,
  ghost: true,
  text: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Button",
};
