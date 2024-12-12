import React from 'react';
import { socialPlatforms } from '../../data/social-media';

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialPlatforms.map((platform) => {
        const Icon = platform.icon;
        return (
          <a
            key={platform.id}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            style={{ color: platform.color }}
          >
            <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {platform.handle}
            </span>
          </a>
        );
      })}
    </div>
  );
}