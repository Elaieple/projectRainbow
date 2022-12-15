import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Teams from './components/Teams/Teams';
import OurFriends from './components/OurFriends/OurFriends';
import AboutUs from './components/aboutus/AboutUs';
import Cmi from './wiews/Cmi/Cmi';
import KakPomoch from './components/KakPomoch/KakPomoch';
import VtoroeDihaniee from './components/VtoroeDihaniee/VtoroeDihaniee';
import OurProjects from './components/ourProgects/OurProjects';
import Order from './wiews/Order/Order';
import Requisites from './components/ requisites/ Requisites';
import Spasibo from './components/Spasibo/Spasibo';
import Donait from './wiews/Donait/Donait';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourFriends" element={<OurFriends />} />
          <Route path="/media" element={<Donait />} />
          <Route path="/howToHelp" element={<KakPomoch />} />
          <Route path="/reports" element={<Order />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/donate" element={<KakPomoch />} />
          <Route path="/requisites" element={<Requisites />} />
        </Routes>
      </header>

    </div>
  );
}

export default App;
