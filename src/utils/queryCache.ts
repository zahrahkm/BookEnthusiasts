import { QueryClient, QueryCache } from "@tanstack/react-query";

const queryCache = new QueryCache({
  onError: (error) => {
    console.error("Query failed:", error);
  },
  onSuccess: (data) => {
    console.log("Query succeeded:", data);
  },
  onSettled: (data, error) => {
    console.log("Query settled:", data, error);
  },
});

const queryClient = new QueryClient({
  queryCache,
});

export default { queryClient, queryCache };
