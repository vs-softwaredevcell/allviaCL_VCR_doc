import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'allviaCL VCR Documentation',
  tagline: 'VCR Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vs-softwaredevcell.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/allviaCL_VCR_doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vs-softwaredevcell', // Usually your GitHub org/user name.
  projectName: 'allviaCL_VCR_doc', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Remove the edit links
          editUrl: undefined,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'VCR Documentation',
      logo: {
        alt: 'VCR Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '홈',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '시작하기',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '아키텍처',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'API',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '시작하기',
              to: '/docs/getting-started/introduction',
            },
            {
              label: '아키텍처',
              to: '/docs/architecture',
            },
            {
              label: 'API',
              to: '/docs/api',
            },
          ],
        },
        {
          title: '더보기',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vs-softwaredevcell/allviaCL_VCR_doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} allviaCL VCR Documentation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
