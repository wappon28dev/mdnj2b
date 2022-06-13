import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

export default {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter({
      // default options are shown
      pages: "public",
      assets: "public",
      fallback: null,
      precompress: false,
    }),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true,
    },
  },
};
