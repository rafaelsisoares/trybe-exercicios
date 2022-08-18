import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

function App() {
  const imageInfo = {
    source:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
    alternativeText: "Cute cat staring",
  };
  return <Image source={imageInfo.source} alternativeText={imageInfo.alternativeText} />;
}

export default App;
