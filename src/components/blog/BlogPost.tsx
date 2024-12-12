import React from 'react';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../data/blog-posts';
import { formatDate } from '../../utils/date';
import { Button } from '../shared/Button';
import { ShareButtons } from '../social/ShareButtons';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <Button
        variant="secondary"
        className="mb-6 flex items-center gap-2"
        onClick={onBack}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Button>

      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full aspect-video object-cover rounded-lg mb-8"
      />

      <div className="flex gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>

      <div className="flex items-center justify-between gap-6 mb-8 pb-8 border-b">
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.author.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime} min read
          </div>
          <span className="text-gray-300">•</span>
          <ShareButtons 
            url={window.location.href} 
            title={post.title}
          />
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
    </article>
  );
}