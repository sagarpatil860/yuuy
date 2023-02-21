import "./styles.css";
import { useRef } from "react";
import { Input, Button } from "@chakra-ui/react";
export default function App() {
  const ref = useRef();
  const setFocus = () => {
    ref.current.focus();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Input ref={ref} onBlur={() => alert("focus removed")} />
      <Button onClick={setFocus}>focus</Button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
