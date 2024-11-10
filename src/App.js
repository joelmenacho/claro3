// src/App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import CountdownBanner from './components/CountdownBanner';
import PromoCarousel from './components/PromoCarousel';
import ActionsSection from './components/ActionsSection';
import ProductsSection from './components/ProductsSection';
import PlanCarousel from './components/PlanCarousel';
import StoreCarousel from './components/StoreCarousel';
import BlogSection from './components/BlogSection';
import BenefitsSection from './components/BenefitsSection';
import ExclusiveBenefits from './components/ExclusiveBenefits';
import HelpSection from './components/HelpSection';
import SponsorSection from './components/SponsorSection';
import InfoCards from './components/InfoCards';
import FooterLinks from './components/FooterLinks';
import FooterBottom from './components/FooterBottom';


function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <CountdownBanner/>
      <PromoCarousel />
      <ActionsSection />
      <ProductsSection />
      <PlanCarousel />
      <StoreCarousel />
      <BlogSection />
      <BenefitsSection />
      <ExclusiveBenefits />
      <HelpSection />
      <SponsorSection />
      <InfoCards />
      <FooterLinks />
      <FooterBottom />

 
    </div>
  );
}

export default App;
