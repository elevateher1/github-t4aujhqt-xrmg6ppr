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
    image: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80',
    caption: 'Celebrating our para-athletes at the recent training camp! 🏃‍♀️✨ #ElevateHer #ParaSports',
    url: 'https://instagram.com/p/example1',
    date: '2024-03-15'
  },
  {
    id: 'post2',
    platform: socialPlatforms.find(p => p.id === 'twitter')!,
    image: 'https://images.unsplash.com/photo-1596726038406-f8461c4f7f9f?auto=format&fit=crop&q=80',
    caption: 'Proud to announce our new partnership with @KenyaParalympics! Together, we\'re creating more opportunities for women in para sports. 🤝',
    url: 'https://twitter.com/elevateher1/status/example2',
    date: '2024-03-14'
  },
  {
    id: 'post3',
    platform: socialPlatforms.find(p => p.id === 'facebook')!,
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80',
    caption: 'Join us this weekend for our Climate Action Workshop! Learn how we\'re making environmental initiatives more inclusive. 🌱',
    url: 'https://facebook.com/elevateher1/posts/example3',
    date: '2024-03-13'
  },
  {
    id: 'post4',
    platform: socialPlatforms.find(p => p.id === 'linkedin')!,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
    caption: 'Excited to share our latest impact report! Over 200 women and girls supported through our programs in the past year. 📊',
    url: 'https://linkedin.com/company/elevateher1/posts/example4',
    date: '2024-03-12'
  }
];