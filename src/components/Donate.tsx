import React from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { Button } from './shared/Button';
import { CreditCard, Gift, Users, Heart } from 'lucide-react';

export function Donate() {
  return (
    <section id="donate" className="py-16 bg-purple-50">
      <Container>
        <SectionTitle
          title="Support Our Cause"
          description="Your contribution helps us empower more women and girls with disabilities through sports and advocacy."
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-purple-600 mb-4">
              <CreditCard className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">One-time Donation</h3>
            <p className="text-gray-600 mb-4">Make a direct impact with a one-time contribution to support our programs.</p>
            <Button variant="primary" fullWidth onClick={() => window.open('https://donate.stripe.com/your-link', '_blank')}>
              Donate Now
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-purple-600 mb-4">
              <Gift className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Monthly Giving</h3>
            <p className="text-gray-600 mb-4">Become a sustaining supporter with a monthly donation to ensure lasting impact.</p>
            <Button variant="primary" fullWidth onClick={() => window.open('https://donate.stripe.com/your-monthly-link', '_blank')}>
              Give Monthly
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-purple-600 mb-4">
              <Users className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Corporate Partnership</h3>
            <p className="text-gray-600 mb-4">Partner with us to create meaningful change through corporate sponsorship.</p>
            <Button variant="secondary" fullWidth onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="h-8 w-8 text-red-500" />
            <h3 className="text-2xl font-semibold">Other Ways to Support</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              • Volunteer your time and skills
            </p>
            <p className="text-gray-600">
              • Donate sports equipment
            </p>
            <p className="text-gray-600">
              • Share our story on social media
            </p>
            <p className="text-gray-600">
              • Organize a fundraising event
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}