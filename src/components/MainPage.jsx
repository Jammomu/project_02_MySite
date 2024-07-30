import '../styles/MainPage.css';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Slider } from './Slider';
import { LeftMenu } from "./LeftMenu";
import { MainComponent } from "./MainComponent";

export function MainPage(){
  return(
    <>
    <div className="mainPage">
      <Header />
      <Slider />
      <LeftMenu />
      <MainComponent />
      <Footer />
    </div>
    </>
  );
}