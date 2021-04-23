import "./Switch.css";

const Switch = () => {
  return (
    <div className="toggle">
      <input type="checkbox" className="checkbox" id="input-switch" />
      <label className="switch" htmlFor="input-switch">
        <span className="circle"></span>
      </label>
    </div>
  );
};

export default Switch;
