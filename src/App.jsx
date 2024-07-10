import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './App.css';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer />
      <NewArrivals />
      <TopSelling />
    </div>
  );
}

export default App;