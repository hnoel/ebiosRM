await Bun.build({
  entrypoints: ["./ebiosRMpro.html"],
  compile: true,
  target: "browser",
  outdir: "./dist",
  minify: true,
});
