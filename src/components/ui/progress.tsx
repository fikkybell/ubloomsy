import * as RC from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React from "react";

const CircularProgressbar = RC.CircularProgressbar as unknown as React.FC<any>;
const buildStyles = RC.buildStyles;
interface listProps {
  categories: string;
  progress: string;
  classname?: string;
  percentage: number;
}

const ProgressList = ({
  categories,
  progress,
  classname,
  percentage,
}: listProps) => {
  return (
    <div
      className={`rounded-md w-full text-xs text-[#767676] p-3 mt-2 ${classname}`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className=" h-10 w-10 rounded-full bg-[#FCF5DF]"></div>
          <div>
            <p>{categories}</p>
            <p>{progress}</p>
          </div>
        </div>
        <div className="w-10">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#9F9F9F",
              pathColor: "#78BCB3",
              trailColor: "#eee",
              textSize: "27px",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressList;
