import React from 'react';
import { BlogCard } from './BlogCard';
import { blogPosts } from '../../data/blog-posts';

interface BlogListProps {
  onPostClick: (id: string) => void;
}

export function BlogList({ onPostClick }: BlogListProps) {
  // Duplicate posts for infinite scroll effect
  const extendedPosts = [...blogPosts, ...blogPosts, ...blogPosts];

  return (
    <>
      {extendedPosts.map((post, index) => (
        <div key={`${post.id}-${index}`} className="w-[350px] flex-shrink-0">
          <BlogCard post={post} onClick={onPostClick} />
        </div>
      ))}
    </>
  );
}