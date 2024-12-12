import React from 'react';
import { X } from 'lucide-react';
import { videos } from '../data/videos';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
}

export function VideoModal({ isOpen, onClose, videoId = 'main' }: VideoModalProps) {
  if (!isOpen) return null;

  const video = videos.find(v => v.id === videoId) || videos[0];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-red-300 transition"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`${video.url}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}