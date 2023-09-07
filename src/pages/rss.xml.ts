import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const GET = async () => {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://lindell-astro-blog.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: "<language>en-us</language>",
  });
};
