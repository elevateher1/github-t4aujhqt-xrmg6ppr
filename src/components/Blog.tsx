import React, { useState, useRef, useEffect } from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { BlogList } from './blog/BlogList';
import { BlogPost } from './blog/BlogPost';
import { blogPosts } from '../data/blog-posts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Blog() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const selectedPost = selectedPostId 
    ? blogPosts.find(post => post.id === selectedPostId)
    : null;

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <Container>
        {!selectedPost ? (
          <>
            <SectionTitle
              title="Latest Updates"
              description="Stories of impact, resilience, and transformation from our community."
            />
            <div className="relative">
              {showLeftArrow && (
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
              )}
              {showRightArrow && (
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              )}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto hide-scrollbar"
              >
                <div className="inline-flex gap-6 py-4 px-2">
                  <BlogList onPostClick={setSelectedPostId} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <BlogPost
            post={selectedPost}
            onBack={() => setSelectedPostId(null)}
          />
        )}
      </Container>
    </section>
  );
}