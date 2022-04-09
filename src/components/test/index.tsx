import { FC } from "react";
import "./styles.css";

interface TestProps {}

const Test: FC<TestProps> = ({}: TestProps) => {
  return <div>Test component created!</div>;
};
export default Test;
