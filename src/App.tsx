import "./App.css";

import RoutesComponent from "./routes";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  </QueryClientProvider>
);
export default App;
