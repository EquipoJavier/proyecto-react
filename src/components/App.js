import { Outlet } from "react-router-dom";
import { useState } from 'react';
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";

function App(props) {
  const [headerTitle, setHeaderTitle] = useState("Madrid");
  const [headerSubtitle, setHeaderSubtitle] = useState("Descubre todos sus secretos");

  function getHeading (title, subtitle) {
    setHeaderTitle(title);
    setHeaderSubtitle(subtitle);
  }

  return (
    <div>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <Menu getHeading={getHeading}/>
      <Outlet />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
