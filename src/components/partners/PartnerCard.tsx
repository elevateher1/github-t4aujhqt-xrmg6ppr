import React from 'react';

interface PartnerCardProps {
  partner: {
    name: string;
    logo: string;
    description: string;
  };
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition group h-full">
      <div className="aspect-square mb-4 overflow-hidden rounded-lg">
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-purple-900">{partner.name}</h3>
      <p className="text-gray-600">{partner.description}</p>
    </div>
  );
}