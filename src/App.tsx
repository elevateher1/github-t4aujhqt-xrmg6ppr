import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { Initiatives } from './components/Initiatives';
import { Impact } from './components/Impact';
import { SuccessStories } from './components/SuccessStories';
import { Blog } from './components/Blog';
import { SocialFeed } from './components/social/SocialFeed';
import { Partners } from './components/Partners';
import { Donate } from './components/Donate';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickStats />
      <Initiatives />
      <Impact />
      <SuccessStories />
      <Blog />
      <SocialFeed />
      <Partners />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;