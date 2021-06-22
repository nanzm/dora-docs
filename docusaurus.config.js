const dayjs = require("dayjs");
const now = dayjs().format("YYYY-MM-DD HH:mm:ss");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Dora 哆啦",
  tagline: "轻量、易部署、可扩展的前端监控平台",
  url: "https://nancode.cn",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nanzm", // Usually your GitHub org/user name.
  projectName: "dora", // Usually your repo name.
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
          href: "https://dora.nancode.cn/login?user=demo",
          label: "线上 Demo",
          position: "right",
        },
        {
          href: "https://github.com/nanzm",
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
              href: 'https://github.com/nanzm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dora. Update at ${now}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/nanzm/dora-docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/nanzm/dora-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
