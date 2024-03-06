import "./landingPage.css";

import Spline from "@splinetool/react-spline";

export default function LandingPage() {
  return (
    <>
      <Spline
        className="spline-container"
        scene="https://prod.spline.design/JX2TI5KM2FzNgp4r/scene.splinecode"
      />
      <div className="buttons-container">
        <button className="landing-button">Login</button>
 
        <button className="landing-button">Subscribe</button>

      </div>
    </>
  );
}
