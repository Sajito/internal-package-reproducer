import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  format: "esm",
  skipNodeModulesBundle: true,
  noExternal: ["logger"],
});
