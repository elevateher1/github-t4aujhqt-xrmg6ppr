import React from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionTitle({ title, description, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-purple-100' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}