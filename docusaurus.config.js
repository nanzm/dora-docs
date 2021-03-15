/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dora 前端监控平台',
  tagline: 'dora web monitor platform',
  url: 'https://nancode.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nancode', // Usually your GitHub org/user name.
  projectName: 'dora', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Dora',
      logo: {
        alt: 'Dora Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nanzm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: '语雀',
              href: 'https://www.yuque.com/dora-forum',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dora, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://www.yuque.com/dora-forum/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://www.yuque.com/dora-forum/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
