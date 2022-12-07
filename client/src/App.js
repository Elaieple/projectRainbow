import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Routes>
      <Route path="/" element={<Main />} />

      <Route element={<ProtectedRouter />}>
        {/* <Route path="/game" element={<Game user={user} setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/stats" element={<Stats user={user} setUser={setUser} />} /> */}
      </Route>

      <Route element={<ProtectedRouter/>}>
        {/* <Route path="/reg" element={<Reg user={user} setUser={setUser} />} />
        <Route path="/auth" element={<Auth user={user} setUser={setUser} />} /> */}
      </Route>

      </Routes>
      </header>
    </div>
  );
}

export default App;
