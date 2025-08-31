import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import Api from "./components/Api";

function App() {
  return (
    <>
      <h1> test</h1>
      <QueryClientProvider client={QueryClient}>
        <Api />
      </QueryClientProvider>
    </>
  );
}

export default App;
