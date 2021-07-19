const dayjs = require("dayjs");
const now = dayjs().format("YYYY-MM-DD HH:mm:ss");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Dora",
  tagline: "5 分钟搭建一套前端监控系统",
  url: "https://doras.space",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dora-projects", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Dora",
      logo: {
        alt: 'Dora Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        {
          href: "https://dora.nancode.cn",
          label: "线上 Demo",
          position: "right",
        },
        {
          href: "https://github.com/dora-projects",
          label: "Github",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'slack',
              href: 'https://dora-msg.slack.com/archives/C0265QB9K2M',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://nancode.cn',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dora-projects',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dora. `,
    },
    googleAnalytics: {
      trackingID: 'G-RMPF5Z1XN3',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: 'G-RMPF5Z1XN3',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/dora-projects/docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/dora-projects/docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
