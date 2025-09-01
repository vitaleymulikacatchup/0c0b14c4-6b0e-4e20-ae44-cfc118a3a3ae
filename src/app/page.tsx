"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarStyleApple 
        logoSrc="/images/logo.svg"
        logoAlt="MemeWave"
        brandName="MemeWave"
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
      />

      <div id="hero" data-section="hero">
        <FrameHero
          title="Welcome to MemeWave Coin"
          description="Join the wave of fun and investment with our coin."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          description="MemeWave Coin is designed to empower users through fun interactions and investment opportunities. Our mission is to create a vibrant community around our currency."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics
          title="Tokenomics of MemeWave"
          description="A transparent look at our token structure."
          cardItems={[
            { id: 1, title: 'Supply', description: 'Total supply of MemeWave Coin is 1 billion.' },
            { id: 2, title: 'Liquidity', description: 'Initially 20% allocated to liquidity.' },
            { id: 3, title: 'Marketing', description: '15% reserved for marketing initiatives.' }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: 'Links', items: [
              { label: 'Home', onClick: () => {} },
              { label: 'About', onClick: () => {} },
              { label: 'Tokenomics', onClick: () => {} }
            ]},
            { title: 'More', items: [
              { label: 'Contact', onClick: () => {} },
              { label: 'Privacy', onClick: () => {} }
            ]},
            { title: 'Socials', items: [
              { label: 'Twitter', onClick: () => {} },
              { label: 'Discord', onClick: () => {} }
            ]}
          ]}
          copyrightText="© 2023 MemeWave Coin"
          onPrivacyClick={() => { /* Handle click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}