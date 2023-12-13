import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
export default function FilterAge({ updateAge }) {
  const [ageRange, setAgeRange] = useState([20, 90]);
  return (
    <div className="p-2 font-bold flex items-center">
      <div className="text-xs w-1/3">Filter by Age:</div>
      <div className="pt-5 pb-5 w-1/3">
        {/* <RangeSlider
          value={ageRange}
          min={0}
          max={100}
          step={1}
          id="range-slider"
            onInput={(e) => {
              // setAgeRange(e.target.value);
              console.log(e.target.value);
            }}
        /> */}
        <input
          type="range"
          onChange={(e) => {
            setAgeRange(e.target.value);
            updateAge(e.target.value);
          }}
          value={ageRange}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
}
