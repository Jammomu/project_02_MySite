import '../styles/MainComponent.css';
import img_001 from '../img/img_001.png';

export function MainComponent(){
  return(
    <>
    <div className='mainComponent'>
      <h2>MainComponent</h2>
      <div className='section'>
        <img src={img_001} alt="" />
        <div className="detail">
          <h3>section01</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam molestiae animi deserunt soluta numquam quo illum facere aperiam eaque optio esse beatae dolorum amet unde libero mollitia, aliquid deleniti! Id.</p>
        </div>
      </div>
      <div className='section'>
        <img src={img_001} alt="" />
        <div className="detail">
          <h3>section02</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi consequuntur minus quis, dolores perferendis temporibus deserunt laudantium quas suscipit officia nam cum nihil repudiandae! Itaque necessitatibus incidunt earum mollitia magni?</p>
        </div>
      </div>
      <div className='section'>
        <img src={img_001} alt="" />
        <div className="detail">
          <h3>section03</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia ratione quas modi inventore, assumenda nesciunt perferendis aliquam maxime illo deserunt quod tenetur accusamus sunt dolor quam. Voluptatem, corrupti vel.</p>
        </div>
      </div>
      <div className='section'>
        <img src={img_001} alt="" />
        <div className="detail">
          <h3>section04</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perspiciatis veritatis voluptatum iure atque recusandae vitae, expedita, illo ipsa eveniet cum officia numquam illum architecto et temporibus porro quo animi?</p>
        </div>
      </div>
    </div>
    </>
  );
}