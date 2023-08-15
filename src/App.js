import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import PrimarySearchAppBar from "./components/header/PrimarySearvhAppBar/PrimarySearchAppBar";
import Home from "./pages/home/Home";

function App() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  
  const showDrawer = () => {
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
  };
  
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <BrowserRouter>
      <PrimarySearchAppBar
        placement={placement}
        onChange={onChange}
        showDrawer={showDrawer}
      />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      {/* Regular or light version of the tooth icon */}
       </BrowserRouter>
  );
}

export default App;
