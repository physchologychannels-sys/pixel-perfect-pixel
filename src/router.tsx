import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// VITE_BASE_PATH is set only by the GitHub Pages build, which serves the site
// from /<repo>/; everywhere else the site serves from the root.
const BASE_PATH = import.meta.env.VITE_BASE_PATH ?? "";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const options: Parameters<typeof createRouter>[0] = {
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  };

  // Assigned outside the object literal on purpose: the build toolchain scans
  // router files for a literal basepath property and skips its route manifest
  // when the value is computed.
  if (BASE_PATH) options["basepath"] = BASE_PATH;

  return createRouter(options);
};
