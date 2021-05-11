import "./CustomColorInput.css";

const CustomColorInput = ({ background, setBackground, setForeground, setAccent }) => {
    let chosenHexColor;
    let msg = "enter your own color";

    const hexToRGB = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    const RGBToHex = (c) => {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const colorChanged = ()=>{
        let colorInput = document.querySelector(".color-input");
        chosenHexColor = colorInput.value;
        setBackground(chosenHexColor);
        
        let rgbb = hexToRGB(chosenHexColor);
       

        const rb = rgbb.r;
        const gb = rgbb.g;
        const bb = rgbb.b;
        
        const rf = 255 - rb;
        const gf = 255 - gb;
        const bf = 255 - bb;
        const fhex = `#${RGBToHex(rf)}${RGBToHex(gf)}${RGBToHex(bf)}`;

        setForeground(fhex);

        const ra = Math.floor(rb / 2);
        const ga = Math.floor(gb / 2);
        const ba = Math.floor(bb / 2);
        const ahex = `#${RGBToHex(ra)}${RGBToHex(ga)}${RGBToHex(ba)}`;

        setAccent(ahex);
    };


    return (
        <div className="custom-color-input">
            <div className="tooltip">
                <span className="msg2">{msg}</span>
            </div>
            <input type="color" onChange={colorChanged} className="color-input" value={background}></input>
        </div>
    );
};

export default CustomColorInput;
