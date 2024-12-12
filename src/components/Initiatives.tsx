import React from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { initiatives } from '../data/initiatives';

export function Initiatives() {
  return (
    <section id="initiatives" className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title="Our Initiatives"
          description="We work at the intersection of disability rights, gender equality, and climate justice to create lasting change."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-purple-600 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}