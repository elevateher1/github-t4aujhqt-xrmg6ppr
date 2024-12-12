import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export interface SocialPlatform {
  id: string;
  name: string;
  icon: typeof Facebook;
  url: string;
  handle: string;
  color: string;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/elevateher1',
    handle: '@elevateher1',
    color: '#1877F2'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/elevateher1',
    handle: '@elevateher1',
    color: '#1DA1F2'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/elevateher1',
    handle: '@elevateher1',
    color: '#E4405F'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@elevateher1',
    handle: '@elevateher1',
    color: '#FF0000'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/elevateher1',
    handle: 'Elevate Her',
    color: '#0A66C2'
  }
];