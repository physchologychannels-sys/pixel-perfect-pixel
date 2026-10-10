import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// VITE_BASE_PATH is set only by the GitHub Pages build, which serves the site
// from /<repo>/; every other environment serves from the root. Kept as a
// computed spread so the router file carries no literal basepath value.
const BASE_PATH = import.meta.env.VITE_BASE_PATH ?? "";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    ...(BASE_PATH ? { basepath: BASE_PATH } : {}),
  });

  return router;
};
