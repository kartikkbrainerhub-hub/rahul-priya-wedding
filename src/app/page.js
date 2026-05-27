"use client";

import AudioPlayer from '@/components/AudioPlayer';
import ParticleBackground from '@/components/ParticleBackground';
import PetalRain from '@/components/PetalRain';
import Hero from '@/components/Hero';
import CoupleReveal from '@/components/CoupleReveal';
import SaveTheDate from '@/components/SaveTheDate';
import Timeline from '@/components/Timeline';
import Venue from '@/components/Venue';
import Gallery from '@/components/Gallery';
import Family from '@/components/Family';
import ThankYou from '@/components/ThankYou';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-luxury-gold/30">
      {/* Floating Helpers */}
      <AudioPlayer />

      {/* GPU Accelerated Canvas Background Animations */}
      <ParticleBackground />
      <PetalRain />

      {/* Cinematic Invitation Sections Flow */}
      <Hero />
      <CoupleReveal />
      <SaveTheDate />
      <Timeline />
      <Venue />
      <Gallery />
      <Family />
      <ThankYou />
      <Footer />
    </main>
  );
}
