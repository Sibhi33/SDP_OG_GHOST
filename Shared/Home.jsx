import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurIn from "@/components/magicui/blur-in";
import PulsatingButton from '@/components/ui/pulsating-button';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';

const Home = () => {
  const navigate = useNavigate();

  // Updated function to navigate to Affiliate page
  const handleAffiliateRedirect = () => {
    navigate('/affil');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <main className="flex-grow flex flex-col justify-center items-center text-center p-4">
        <VelocityScroll
          text="stories poems morals images rhymes kids school colours"
          default_velocity={2/3}
          className="font-display text-center text-3xl font-extralight tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem] opacity-20"
        />
        <BlurIn
          word="𝙄𝙣𝙛𝙡𝙪𝙚𝙣𝙘𝙚 𝙮𝙤𝙪𝙧 𝙠𝙞𝙙𝙨 𝙬𝙞𝙩𝙝 𝙢𝙤𝙧𝙖𝙡𝙨🪄🔮"
          className="text-lg font-extralight text-black dark:text-white mb-6 justify-center items-center"
        />
        <PulsatingButton
          className="bg-gradient-to-r from-green-700 to-violet-600"
          onClick={handleAffiliateRedirect}
        >
          <p className="text-white font-mono">Join affiliate program ᐅᐅ</p>
        </PulsatingButton>
      </main>
      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p>&copy; 2024 Imagica. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-white">Privacy Policy</a>
            <a href="#" className="text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
