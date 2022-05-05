const litPlugin = require("@lit-labs/eleventy-plugin-lit");
const esbuild = require("esbuild");

const buildComponents = () =>
  esbuild.buildSync({
    entryPoints: ["_components/index.ts"],
    bundle: true,
    outfile: "_site/_components/index.js",
  });

const buildBootupScript = () =>
  esbuild.buildSync({
    entryPoints: ["bootup.ts"],
    bundle: true,
    outfile: "_site/bootup.js",
  });

module.exports = (eleventy) => {
  eleventy.on("eleventy.before", () => {
    buildComponents();
    buildBootupScript();
  });

  eleventy.addPlugin(litPlugin, {
    mode: "worker",
    componentModules: ["_site/_components/index.js"],
  });

  eleventy.addWatchTarget("_components");
  eleventy.addPassthroughCopy("_assets");

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};
