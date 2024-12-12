import React from 'react';
import { Container } from './shared/Container';
import { Trophy, Users, Heart } from 'lucide-react';

export function QuickStats() {
  return (
    <div className="bg-white py-12 border-b">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-6 rounded-lg bg-purple-50">
            <div className="bg-purple-100 p-3 rounded-full">
              <Trophy className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-900">15+</p>
              <p className="text-gray-600">Para Athletes Trained</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 rounded-lg bg-red-50">
            <div className="bg-red-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-red-900">200+</p>
              <p className="text-gray-600">Community Members</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 rounded-lg bg-purple-50">
            <div className="bg-purple-100 p-3 rounded-full">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-900">50+</p>
              <p className="text-gray-600">Success Stories</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}