
import './App.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainComponent } from "./components/MainComponent";

function App() {
  return (
    <div className="mainPage">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
