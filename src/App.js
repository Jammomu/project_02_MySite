
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainComponent } from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainComponent/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
