import "./Content.css";
import { useState } from "react";
import Card from "./Card";
import Copy from "./Copy";
import CustomColorInput from './CustomColorInput';

const Content = () => {
  const [background, setBackground] = useState("#F1F1F1");
  const [foreground, setForeground] = useState("#0096BB");
  const [accent, setAccent] = useState("#78C3D6");

  const RGBToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  // const HexToRGB = (c) => {
  //   let rgb = parseInt(c, 16);
  //   return rgb;
  // };

  const reset = () => {
    // generating random background color in rgb, rb is short from red-background
    const rb = Math.floor(Math.random() * 256);
    const gb = Math.floor(Math.random() * 256);
    const bb = Math.floor(Math.random() * 256);
    // converting rgb random color to hex
    const bhex = `#${RGBToHex(rb)}${RGBToHex(gb)}${RGBToHex(bb)}`;
    console.log(bhex);
    setBackground(bhex);

    const rf = 255 - rb;
    const gf = 255 - gb;
    const bf = 255 - bb;
    const fhex = `#${RGBToHex(rf)}${RGBToHex(gf)}${RGBToHex(bf)}`;
    console.log(fhex);
    setForeground(fhex);

    const ra = Math.floor(rb / 2);
    const ga = Math.floor(gb / 2);
    const ba = Math.floor(bb / 2);
    const ahex = `#${RGBToHex(ra)}${RGBToHex(ga)}${RGBToHex(ba)}`;
    console.log(ahex);
    setAccent(ahex);
  };

  return (
    <div className="content">
      <div className="re copy">
        <div className="tooltip">
          <span className="msg">generate random colors</span>{" "}
        </div>
        <br />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill={foreground}
          onClick={reset}
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 20l-1.359-2.038c-1.061.653-2.305 1.038-3.641 1.038-3.859 0-7-3.14-7-7h2c0 2.757 2.243 5 5 5 .927 0 1.786-.264 2.527-.708l-1.527-2.292h5.719l-1.719 6zm0-8c0-2.757-2.243-5-5-5-.927 0-1.786.264-2.527.708l1.527 2.292h-5.719l1.719-6 1.359 2.038c1.061-.653 2.305-1.038 3.641-1.038 3.859 0 7 3.14 7 7h-2z" />
        </svg>
      </div>
      <CustomColorInput 
        background={background}
        setBackground={setBackground}
        setForeground={setForeground}
        setAccent={setAccent}
      ></CustomColorInput>
      <Card
        background={background}
        foreground={foreground}
        accent={accent}
      ></Card>
      <div className="copy-control">
        <Copy color={background}></Copy>
        <Copy color={foreground}></Copy>
        <Copy color={accent}></Copy>
      </div>
    </div>
  );
};

export default Content;
