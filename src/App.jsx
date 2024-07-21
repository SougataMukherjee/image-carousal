import { useState } from "react";

import "./App.css";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <Carousel
        images={[
          "https://images.pexels.com/photos/802127/pexels-photo-802127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1576955/pexels-photo-1576955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ]}
      />
    </>
  );
}

export default App;
