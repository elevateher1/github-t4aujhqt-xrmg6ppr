import React from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { Shield, Users, TreePine } from 'lucide-react';

export function Impact() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-red-900 text-white">
      <Container>
        <SectionTitle
          title="Our Impact"
          description="Creating meaningful change in our community through dedicated action and advocacy."
          light
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-red-300" />
            <h3 className="text-2xl font-bold mb-2">200+</h3>
            <p className="text-purple-100">Women and girls supported through GBV prevention programs</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-red-300" />
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-purple-100">Caregivers empowered through support networks</p>
          </div>
          <div className="text-center">
            <TreePine className="h-12 w-12 mx-auto mb-4 text-red-300" />
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-purple-100">Climate resilience initiatives launched</p>
          </div>
        </div>
      </Container>
    </section>
  );
}