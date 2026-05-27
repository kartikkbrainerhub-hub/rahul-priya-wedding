"use client";

import { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Santoor traditional instrumental - gorgeous royalty-free Indian morning classical feel
    audioRef.current = new Audio('https://www.chosic.com/wp-content/uploads/2021/04/Warm-Morning-Santoor-Instrumental.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Handle potential browser autoplay blocks gracefully
    const handleAutoplay = () => {
      if (!hasInteracted) {
        // Try autoplaying on first click anywhere on body as a helper
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {});
        window.removeEventListener('click', handleAutoplay);
      }
    };

    window.addEventListener('click', handleAutoplay);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.removeEventListener('click', handleAutoplay);
    };
  }, [hasInteracted]);

  const togglePlay = (e) => {
    e.stopPropagation(); // prevent body click handler interference
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
      setHasInteracted(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-5 right-5 z-[100] flex items-center gap-2">
      {/* Soundwaves indicator */}
      {isPlaying && (
        <div className="flex items-end gap-[3px] bg-luxury-charcoal/40 backdrop-blur-md px-3 py-2 rounded-full border border-luxury-gold/20 h-8">
          <div className="w-[3px] bg-luxury-gold rounded-full animate-pulse h-4" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-[3px] bg-luxury-gold rounded-full animate-pulse h-5" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-[3px] bg-luxury-gold rounded-full animate-pulse h-3" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-[3px] bg-luxury-gold rounded-full animate-pulse h-6" style={{ animationDelay: '0.2s' }}></div>
          <span className="text-[10px] text-luxury-gold font-serif font-semibold pl-1 tracking-wider uppercase hidden xs:inline">Playing</span>
        </div>
      )}

      {/* Main floating action button */}
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 shadow-lg ${
          isPlaying
            ? 'bg-luxury-maroon border-luxury-gold text-luxury-gold shadow-luxury-gold/20 animate-spin-slow'
            : 'bg-luxury-cream border-luxury-maroon/20 text-luxury-maroon hover:border-luxury-gold/50 shadow-black/10 animate-pulse'
        }`}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5 text-luxury-maroon/60" />
        )}
      </button>
    </div>
  );
}
