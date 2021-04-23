import { useState } from "react";
import "./Copy.css";

const Copy = ({ color }) => {
  const [msg, setMsg] = useState("click to Copy");

  const copyColor = () => {
    console.log(color);
    navigator.clipboard.writeText(color);
    setMsg("copied!");
    setInterval(() => {
      setMsg("copy again?");
    }, 1000);
  };

  return (
    <div className="copy">
      <button className="btn" onClick={copyColor} style={{ background: color }}>
        {color}
      </button>
      <div className="tooltip">
        <span className="msg">{msg}</span>
      </div>
    </div>
  );
};

export default Copy;
