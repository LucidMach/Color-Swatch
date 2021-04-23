import "./Card.css";

const Card = ({ foreground, background, accent }) => {
  return (
    <div className="background" style={{ background: background }}>
      <svg
        id="logo"
        data-name="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="25 25 100 100"
        fill={foreground}
      >
        <polygon points="76.17 24.54 76.17 43.28 101.9 57.85 117.81 48.51 76.17 24.54" />
        <polygon points="46.99 59.12 47.32 58.93 31.51 48.98 30.65 49.47 30.71 99.65 46.81 90.2 46.99 59.12" />
        <polygon points="103.11 90.89 102.79 91.08 118.55 100.99 119.35 100.53 119.28 50.35 103.29 59.74 103.11 90.89" />
        <polygon points="49.6 57.6 73.83 43.57 73.83 24.46 33.79 47.65 49.6 57.6" />
        <polygon points="100.5 92.4 76.17 106.5 76.17 125.54 116.26 102.32 100.5 92.4" />
        <polygon points="73.83 106.67 48.15 92.13 32.19 101.49 73.83 125.46 73.83 106.67" />
      </svg>
      <a
        href="https://www.instagram.com/lucidmach/"
        target="_"
        className="accent"
        style={{ color: accent }}
      >
        @LucidMach
      </a>
    </div>
  );
};

export default Card;
