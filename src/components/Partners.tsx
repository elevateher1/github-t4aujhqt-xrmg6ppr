import React, { useRef, useState, useEffect } from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { partners } from '../data/partners';
import { PartnerGrid } from './partners/PartnerGrid';
import { BecomePartner } from './partners/BecomePartner';
import { ScrollControls } from './shared/ScrollControls';

export function Partners() {
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
    <section id="partners" className="py-16 bg-white">
      <Container>
        <SectionTitle
          title="Our Partners"
          description="Working together with organizations that share our vision for an inclusive and sustainable future."
        />

        <div className="relative mt-12">
          <ScrollControls
            showLeft={showLeftArrow}
            showRight={showRightArrow}
            onScroll={scroll}
          />
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar"
          >
            <div className="inline-flex gap-6 py-4 px-2">
              <PartnerGrid partners={[...partners, ...partners, ...partners]} />
            </div>
          </div>
        </div>

        <BecomePartner />
      </Container>
    </section>
  );
}