import React from 'react';
import { Share2 } from 'lucide-react';
import { socialPlatforms } from '../../data/social-media';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareUrls = {
    facebook: `https://www.facebook.com/profile.php?id=61565542059308`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600 flex items-center gap-2">
        <Share2 className="h-5 w-5" />
        Share
      </span>
      <div className="flex gap-3">
        {Object.entries(shareUrls).map(([platform, shareUrl]) => {
          const socialPlatform = socialPlatforms.find(p => p.id === platform);
          if (!socialPlatform) return null;
          
          const Icon = socialPlatform.icon;
          return (
            <a
              key={platform}
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[${socialPlatform.color}] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open(shareUrl, 'share', 'width=550,height=450');
              }}
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}