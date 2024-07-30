import '../styles/Header.css';
import mainBannerImg from '../img/sub_banner.png';

export function Header(){
  return(
    <>
    <div className="header">
      <div className="titleZone">
        <div className="mainTitle">
          <h1>Title</h1>
        </div>
        <div className="headNav">
          <ul>
            <li><a href="#">Nav01</a></li>
            <li><a href="#">Nav02</a></li>
            <li><a href="#">Nav03</a></li>
            <li><a href="#">Nav04</a></li>
            <li><a href="#">Nav05</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}