import React from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { programs } from '../data/programs';

export function Programs() {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title="Our Programs"
          description="We offer comprehensive programs designed to support athletes at every level of their journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-purple-600 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}