import { appRouter } from "@/server/routers/app";
import * as trpcNext from "@trpc/server/adapters/next";

// API endpoint
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
