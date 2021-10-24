import Input from "./Input";

export default {
  title: "Components/Input",
  props: {
    value: "hi",
    label: "hello"
  },
};

export const Default = (props) => <Input {...props} />;
