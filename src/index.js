import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import darkTheme from "./theme";

import "./styles/styles.css";

import Button from "./components/Button";
import Input from "./components/Input";

const App = props => (
  <ThemeProvider theme={darkTheme}>
    <div>
      <Input defaultValue="put in" type="text" />
      <Input defaultValue="put in" type="text" inputColor="var(--success)" />
      <Button>Button</Button>
      <Button textColor="var(--text-normal)" bg="tomato">
        Button
      </Button>
    </div>
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
