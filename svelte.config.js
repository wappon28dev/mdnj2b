import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

export default {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "index.html",
      precompress: true,
    }),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true,
    },

    // paths: {
    //   base: "/250026",
    // },
  },
};
