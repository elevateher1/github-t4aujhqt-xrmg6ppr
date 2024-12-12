import React from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { successStories } from '../data/stories';

export function SuccessStories() {
  return (
    <section id="success" className="py-16 bg-white">
      <Container>
        <SectionTitle
          title="Change Makers"
          description="Meet the inspiring women who are leading the way in our community."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-purple-600 mb-4">{story.role}</p>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}