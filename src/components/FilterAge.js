import { useState } from "react";
export default function FilterAge({ updateAge }) {
  const [ageRange, setAgeRange] = useState(0);
  return (
    <div className="flex items-center">
      <div className="text-2xs w-1/3 font-regular">Filter by Age:</div>
      <div className="pt-5 pb-5 w-1/3">
        <input
          type="range"
          onChange={(e) => {
            setAgeRange(e.target.value);
            updateAge(e.target.value);
          }}
          value={ageRange}
          min={0}
          max={100}
          step={5}
        />
        {ageRange}
      </div>
    </div>
  );
}
