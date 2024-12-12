import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { SocialLinks } from './SocialLinks';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { socialPosts } from '../../data/social-posts';

export function SocialFeed() {
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

  return (
    <section id="social" className="py-16 bg-white">
      <Container>
        <SectionTitle
          title="Connect With Us"
          description="Follow our journey and join the conversation on social media."
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8 mb-12">
            <SocialLinks />
            <p className="text-gray-600 text-center">
              Stay updated with our latest news, stories, and events by following us on social media.
              Join our growing community of supporters and advocates!
            </p>
          </div>

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
                {[...socialPosts, ...socialPosts, ...socialPosts].map((post, index) => (
                  <div key={`${post.id}-${index}`} className="w-[300px] flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                      <img
                        src={post.image}
                        alt={post.caption}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-4">
                        <p className="text-gray-600 text-sm line-clamp-2">{post.caption}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {post.platform.icon && (
                              <post.platform.icon 
                                className="w-5 h-5" 
                                style={{ color: post.platform.color }} 
                              />
                            )}
                            <span className="text-sm text-gray-500">{post.platform.name}</span>
                          </div>
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 text-sm hover:text-purple-700"
                          >
                            View Post →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}