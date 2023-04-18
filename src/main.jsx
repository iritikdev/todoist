import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import "normalize.css";
import "./index.css";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        borderColor: "transparent",
      },
    },
  },
  fonts: {
    body: "'Josefin Sans', sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
