import React from 'react';
import { PartnerCard } from './PartnerCard';

interface PartnerGridProps {
  partners: Array<{
    name: string;
    logo: string;
    description: string;
  }>;
}

export function PartnerGrid({ partners }: PartnerGridProps) {
  return (
    <>
      {partners.map((partner, index) => (
        <div key={`${partner.name}-${index}`} className="w-[300px] flex-shrink-0">
          <PartnerCard partner={partner} />
        </div>
      ))}
    </>
  );
}