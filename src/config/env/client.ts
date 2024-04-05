import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_URL: z.string().url(),
  },
  runtimeEnv: process.env as any,
});
