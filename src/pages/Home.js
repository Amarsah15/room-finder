import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BrowseSections from '../components/BrowseSections';
import Footer from '../components/Footer';
import HandpickedCollections from '../components/HandpickedCollection';
import BoxAboutUs from '../components/BoxAboutUs';
import Footer1 from '../components/Footer1';

const Home = () => {
    return (
        <div>
          <Header />
          <main>
            <HeroSection />
            <BrowseSections />
            <BoxAboutUs/>
            <HandpickedCollections/>
            <Footer1/>
          </main>
          <Footer />
        </div>
      );
}

export default Home