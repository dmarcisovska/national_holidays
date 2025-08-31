import { useState } from "react";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import Api from "./components/Api";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <h1> Public Holidays App</h1>
      <QueryClientProvider client={queryClient}>
        <Api />
      </QueryClientProvider>
    </>
  );
}

export default App;
