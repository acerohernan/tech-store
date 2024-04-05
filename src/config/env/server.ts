import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const serverEnv = createEnv({
  server: {
    SITE_NAME: z.string().min(1),
  },
  runtimeEnv: process.env as any,
});
