const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zenith Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.zenith.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  url: 'https://docs.zenith.tech', // Your website URL
  baseUrl: '/',
  organizationName: 'zenithdb', // Usually your GitHub org/user name.
  projectName: 'zenith-docs-prototype', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Zenith Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/zenithdb/zenith',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),

          // Please change this to your repo.
          editUrl:
            'https://github.com/zenithdb/zenith-docs/edit/master/website/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
