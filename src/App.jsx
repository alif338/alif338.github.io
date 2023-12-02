import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
