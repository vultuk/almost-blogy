import { Config } from './types';

export function config(): Config {
  return {
    homepageIsBlog: true,
    pages: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
    ],
    socials: {
      facebook: { name: 'Facebook', href: 'https://facebook.com' },
      twitter: { name: 'Twitter', href: 'https://twitter.com' },
      instagram: { name: 'Instagram', href: 'https://instagram.com' },
      github: { name: 'GitHub', href: 'https://github.com' },
      youtube: { name: 'YouTube', href: 'https://youtube.com' },
    },
  };
}
