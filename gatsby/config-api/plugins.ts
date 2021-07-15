import { resolve } from "path";
import { rssFeedPlugin } from "./rss-feed";
import { sitemapPlugin } from "./sitemap";
import { Plugins } from "./types";

export const plugins: Plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-plugin-styled-components",
    options: {
      ssr: false,
      displayName: true,
    },
  },
  "gatsby-plugin-lodash",
  "gatsby-plugin-typescript",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "content",
      path: resolve(`${__dirname}/../../content/`),
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      excerpt_separator: `<!-- overview -->`,
      
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Kyma",
      short_name: "Kyma",
      start_url: "/",
      background_color: "#fff",
      theme_color: "#0073e6",
      display: "standalone",
      icon: "static/android-chrome-512x512.png",
    },
  },
  {
    resolve: `gatsby-remark-videos`,
    options: {
      pipelines: [
        {
          name: 'vp9',
          transcode: (chain: any) =>
            chain
              .videoCodec('libvpx-vp9')
              .noAudio()
              .outputOptions(['-crf 20', '-b:v 0']),
          maxHeight: 480,
          maxWidth: 900,
          fileExtension: 'webm',
        },
        {
          name: 'h264',
          transcode: (chain: any) =>
            chain
              .videoCodec('libx264')
              .noAudio()
              .addOption('-profile:v', 'main')
              .addOption('-pix_fmt', 'yuv420p')
              .outputOptions(['-movflags faststart'])
              .videoBitrate('1000k'),
          maxHeight: 480,
          maxWidth: 900,
          fileExtension: 'mp4',
        },
      ],
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-122665881-1",
      anonymize: true,
      allowLinker: true,
    },
  },
  `gatsby-plugin-netlify`,
  `gatsby-plugin-netlify-cache`,
  {
    resolve: `gatsby-plugin-env-variables`,
    options: {
      allowList: ["GOOGLE_CSE", "ALGOLIA_API_KEY", "ALGOLIA_INDEX_NAME"],
    },
  },
  "kyma-project-robots-txt-plugin",
  sitemapPlugin,
  rssFeedPlugin,
];
