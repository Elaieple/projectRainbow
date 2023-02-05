import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import New from './wiews/New/New';
import CurrentProject from './components/currentProject/currentProject';
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
          <Route path="/media" element={<Cmi />} />
          <Route path="/howToHelp" element={<KakPomoch />} />
          <Route path="/reports" element={<Order />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/donate" element={<Donait />} />
          <Route path="/requisites" element={<Requisites />} />
          <Route path="/vtordih" element={<VtoroeDihaniee />} />
          <Route path="/media/:id" element={<New />} />
          <Route path="/current/:id" element={<CurrentProject />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </header>

    </div>
  );
}

export default App;
