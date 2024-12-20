import "./App.css";

import RoutesComponent from "./routes";
import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  </QueryClientProvider>
);
export default App;
