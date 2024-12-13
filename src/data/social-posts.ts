import { socialPlatforms, SocialPlatform } from './social-media';

interface SocialPost {
  id: string;
  platform: SocialPlatform;
  image: string;
  caption: string;
  url: string;
  date: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: 'post1',
    platform: socialPlatforms.find(p => p.id === 'instagram')!,
    image: 'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/469866158_122127226766518068_3767550850300478472_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGaYn1cetjBUWP3BR7msp6O1eOCw6Kq0JPV44LDoqrQk0zAf3nnALvfobIUVYK536lIr8PgBBHx0sgKoZ90e3qi&_nc_ohc=Q9fAqVXkXVEQ7kNvgHjkdIa&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AtBDEB76Ft0ThuGHaY7HZEV&oh=00_AYCcNA871gQJmRb_pTtGYMftNAOGL3Un-B3dexJR_N3Ybw&oe=67621398',
    caption: 'proudly advocated for women and girls with disabilities during the 16 Days of Activism Against Gender-Based Violence',
    url: 'https://www.instagram.com/el_evateher/p/DDXUzv5IiJn/',
    date: '2024-03-15'
  },
  {
    id: 'post2',
    platform: socialPlatforms.find(p => p.id === 'twitter')!,
    image: 'https://pbs.twimg.com/media/GeXrr6GXIAQ7b16?format=jpg&name=large',
    caption: '',
    url: 'https://twitter.com/levateher/status/1866156903245430808',
    date: '2024-03-14'
  },
 
];