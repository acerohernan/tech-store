import createJITI from "jiti";
import { fileURLToPath } from "node:url";

// import env vairables here to validate during build
const jiti = createJITI(fileURLToPath(import.meta.url));

jiti("./src/config/env/client.ts");
jiti("./src/config/env/server.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
