import React, { useState } from 'react';
import { Container } from './shared/Container';
import { Button } from './shared/Button';
import { Play, Award, Heart } from 'lucide-react';
import { BackgroundSlider } from './BackgroundSlider';
import { VideoModal } from './VideoModal';

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('main');

  const handleDonateClick = () => {
    const donateSection = document.getElementById('donate');
    donateSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchVideo = (videoId: string = 'main') => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="relative min-h-[700px]">
      <BackgroundSlider />
      
      <Container className="relative h-full py-20">
        <div className="flex flex-col justify-center h-full text-white max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-red-400" />
            <span className="text-red-400 font-semibold">Empowering Through Sports</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Women & Girls with Disabilities
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A grassroots organization using sports to advocate for rights, prevent gender-based violence, and promote climate justice for women and girls with disabilities in Kenya.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              variant="primary" 
              className="px-8 py-3 flex items-center gap-2"
              onClick={() => handleWatchVideo('main')}
            >
              <Play className="h-5 w-5" />
              Watch Our Story
            </Button>
            <Button 
              variant="secondary" 
              className="px-8 py-3"
              onClick={handleDonateClick}
            >
              Support Our Cause
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleWatchVideo('impact')}>
              <Award className="h-10 w-10 text-red-400" />
              <div>
                <h3 className="font-semibold">Para Sports</h3>
                <p className="text-sm text-gray-200">Watch our impact</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="h-10 w-10 text-red-400" />
              <div>
                <h3 className="font-semibold">Community</h3>
                <p className="text-sm text-gray-200">Strong support network</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-10 w-10 text-red-400" />
              <div>
                <h3 className="font-semibold">Advocacy</h3>
                <p className="text-sm text-gray-200">Rights & representation</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)}
        videoId={currentVideoId}
      />
    </div>
  );
}