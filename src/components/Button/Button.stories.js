import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  props: {
    label: "Login",
    className: "red",
  },
  argTypes: {
    onClick: {actions: "clicked"},
    className: {
      control: {
        type: "select",
        options: ["primary", "neutral", "secondary", "red"],
      },
      defaultValue: "red",
    },
  },
};

const Template = (props) => <Button {...props}/>;

export const Buttons = Template.bind({})
// export const Primary = (props) => <Button {...props} className="primary" />;
// export const Neutral = (props) => <Button {...props} className="neutral" />;
// export const Secondary = (props) => <Button {...props} className="secondary" />;
