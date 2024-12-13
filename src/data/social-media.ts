import { Facebook as FacebookIcon, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export interface SocialPlatform {
  id: string;
  name: string;
  icon: typeof FacebookIcon;
  url: string;
  handle: string;
  color: string;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: FacebookIcon,
    url: 'https://www.facebook.com/profile.php?id=61565542059308',
    handle: '@elevateher1',
    color: '#1877F2'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: Twitter,
    url: 'https://x.com/levateher',
    handle: '@elevateher1',
    color: '#1DA1F2'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/el_evateher/',
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
    url: 'https://www.linkedin.com/in/elevate-her-b43378327/',
    handle: 'Elevate Her',
    color: '#0A66C2'
  }
];