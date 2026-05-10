import { renderToString } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

export function render(url: string) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <App ssrPath={url} />
    </QueryClientProvider>
  );

  return html;
}
