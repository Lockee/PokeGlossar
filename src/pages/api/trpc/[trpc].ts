import { AppRouter, appRouter } from "@/server/routers/app";
import { inferProcedureOutput } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

// API endpoint
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});

// gets type of query
export type inferQueryResponse<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;
