import './Gravity.css'
import Gravityimg1 from './assets/gravity1.jpeg'
import Gravityimg2 from './assets/gravity2.jpeg'
import Gravityimg3 from './assets/gravity3.jpeg'

export function Gravity() {
  return (
    <>
      <div className="Gravity-container">
        <div className="h2-container">
          <h2 className="gravity-h2">EXPERIENCE THE GRAVITY</h2>
        </div>
        <div className="h3-container">
          <h3 className="exploration-h3">THE SPACE EXPLORATION</h3>
        </div>
        <div className="image-gravity-container">
          <img src={Gravityimg1} alt="" />
          <img src={Gravityimg2} alt="" />
          <img src={Gravityimg3} alt="" />
        </div>
        <div className="gravity-button-container">
          <button className="gravity-button">CHOOSE YOUR PLAN</button>
        </div>
      </div>
    </>
  );
}
