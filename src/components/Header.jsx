import '../styles/Header.css';

export function Header(){
  return(
    <>
    <div className="header">
      <div className="titleZone">
        <div className="mainTitle">
          <h1>Title</h1>
        </div>
        <div className="mainMenu">
          <ul>
            <li>
              <a href="#">COMPANY</a>
              <ul className="subMenu">
                <li><a href="#">subPage01_1</a></li>
                <li><a href="#">subPage01_2</a></li>
              </ul>
            </li>
            <li>
              <a href="#">BUSINESS</a>
              <ul className="subMenu">
                <li><a href="#">subPage02_1</a></li>
                <li><a href="#">subPage02_2</a></li>
              </ul>
            </li>
            <li>
              <a href="#">PRODUCT</a>
              <ul className="subMenu">
                <li><a href="#">subPage03_1</a></li>
                <li><a href="#">subPage03_2</a></li>
              </ul>
            </li>
            <li>
              <a href="#">CUSTOMER SUPPORT</a>
              <ul className="subMenu">
                <li><a href="#">subPage04_1</a></li>
                <li><a href="#">subPage04_2</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}