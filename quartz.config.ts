import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Latin Grow",
    pageTitleSuffix: " | Latin Grow",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "inde3d100.github.io/Latin-Grow-Public",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Literata",
        body: "Source Sans 3",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f3ee",
          lightgray: "#e6ddd2",
          gray: "#6b6258",
          darkgray: "#3d3833",
          dark: "#1c1a17",
          secondary: "#4f6e58",
          tertiary: "#3d5a46",
          highlight: "rgba(79, 110, 88, 0.08)",
          textHighlight: "#d2c3a888",
        },
        darkMode: {
          light: "#12110f",
          lightgray: "#2b2724",
          gray: "#8d857a",
          darkgray: "#e0d7cb",
          dark: "#f0e8df",
          secondary: "#94b39c",
          tertiary: "#c9b99f",
          highlight: "rgba(148, 179, 156, 0.15)",
          textHighlight: "#94b39c55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
