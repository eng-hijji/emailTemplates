import { useState, useEffect } from "react";
import Hijji from "./IMAGES/personal photo.jpeg";
import faah from "./audio/faah.mp3";
import dam from "./audio/daaaaaamn (1).mp3";

function App() {
  const [status, setStatus] = useState(false);
  let audio1 = new Audio(faah);
  let audio2 = new Audio(dam);
  return (
    <div
      className="fixed inset-0 bg-gray"
      onClick={() => {
        audio1.currentTime = 0;
        audio1.play();
      }}
    >
      <div
        className="   absolute top-40 left-30 z-50"
        onClick={(e) => {
          e.stopPropagation();
          setStatus(true);

          audio2.currentTime = 1;

          audio2.play();
        }}
      >
        <img
          src={Hijji}
          alt="Hijji"
          className={`w-50 h-50 object-cover  ${status ? "opacity-100" : "opacity-0 transition ease duration-300 "}`}
        />
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 800 400"
          width="80px"
          className={`absolute top-[47px] left-[32%] ${status ? "tanslate-0" :"translate-x-100"} ${status ? "opacity-100" : "opacity-0"} transition duration-1000`}
        >
          <g id="sunglasses-front">
            <path
              d="M 170 150 L 350 150 C 350 250 170 250 170 150 Z"
              fill="#111111"
            />
            <path
              d="M 190 165 Q 240 160 250 190 Q 230 175 190 165 Z"
              fill="#ffffff"
              opacity="0.3"
            />

            <path
              d="M 450 150 L 630 150 C 630 250 450 250 450 150 Z"
              fill="#111111"
            />
            <path
              d="M 470 165 Q 520 160 530 190 Q 500 175 470 165 Z"
              fill="#ffffff"
              opacity="0.3"
            />

            <path
              d="M 155 145 C 155 135, 365 135, 365 145 A 10 10 0 0 1 370 155 C 375 155, 425 155, 430 155 A 10 10 0 0 1 435 145 C 435 135, 645 135, 645 145 C 650 190, 625 265, 540 265 C 465 265, 445 200, 445 170 C 445 165, 355 165, 355 170 C 355 200, 335 265, 260 265 C 175 265, 150 190, 155 145 Z"
              fill="#1a1a1a"
              fill-rule="evenodd"
            />

            <ellipse
              cx="180"
              cy="148"
              rx="7"
              ry="4"
              fill="#e6e6e6"
              transform="rotate(-10, 180, 148)"
            />
            <ellipse
              cx="620"
              cy="148"
              rx="7"
              ry="4"
              fill="#e6e6e6"
              transform="rotate(10, 620, 148)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
