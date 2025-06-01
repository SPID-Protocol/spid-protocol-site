import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isProd = process.env.NODE_ENV === 'production';

const config: Config = {
  title: 'SPID Protocol',
  tagline: 'A Practical Consent Framework for Responsible AI Governance',
  url: 'https://spid-protocol.github.io',
  baseUrl: '/spid-protocol-site/',
  favicon: 'img/favicon.ico',
  organizationName: 'spid-protocol',
  projectName: 'spid-protocol-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: 'img/spid-social-card.png',
    navbar: {
      title: 'SPID Protocol',
      logo: {
        alt: 'SPID Protocol Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/docs/intro', label: 'Whitepaper', position: 'left' },
        {
          href: 'https://github.com/spid-protocol/spid-protocol-whitepaper',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Whitepaper', to: '/docs/intro' }] },
        { title: 'More', items: [{ label: 'Blog', to: '/blog' }] }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SPID Protocol Initiative.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
