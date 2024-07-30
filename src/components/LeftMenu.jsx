import '../styles/LeftMenu.css';

export function LeftMenu(){
  return(
    <>
    <div className="leftMenu">
      <h3 className='leftMenuTitle'><a href="#">Menu01</a></h3>
      <ul>
        <li><a href="#">menu01</a></li>
        <li><a href="#">menu02</a></li>
        <li><a href="#">menu03</a></li>
      </ul>

      <h3 className='leftMenuTitle'><a href="#">Menu02</a></h3>
      <ul>
        <li><a href="#">menu01</a></li>
        <li><a href="#">menu02</a></li>
        <li><a href="#">menu03</a></li>
      </ul>
    </div>
    </>
  );
}