import './App.css';
// import { Routes, Route} from "react-router-dom";
// import About from "./routes/About";
// import Careers from "./routes/Careers";
// import Home from "./routes/Home";
// import Navbar from './Navbar';
import IFrame from './IFrame';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <IFrame url={"./disco-diffusion.html"} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes> */}
    </>
  );
}
export default App;
