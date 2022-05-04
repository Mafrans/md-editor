const litPlugin = require("@lit-labs/eleventy-plugin-lit");
const esbuild = require("esbuild");
const glob = require("glob");

const buildComponents = () =>
  esbuild.buildSync({
    entryPoints: glob.sync("_components/**/*.ts"),
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
  buildComponents();
  buildBootupScript();

  eleventy.addPlugin(litPlugin, {
    mode: "worker",
    componentModules: ["_site/_components/index.js"],
  });

  eleventy.addWatchTarget("_components");

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};
