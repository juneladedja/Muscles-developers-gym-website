import { Herosection } from "./Herosection";
import { Navbar } from "./Navbar";
import { Gravity } from "./Gravity";
import { Footer } from "./Footer";

function App() {
  return (
    <>
       <Navbar></Navbar>
      <Herosection />
      <Gravity /> 
      <Footer></Footer>
    </>
  );
}

export default App;
