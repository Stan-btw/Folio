import React from "react";

interface ExperienceProps {
  position?: string;
  project?: string;
  front?: boolean;
  back?: boolean;
  design?: boolean;
}

function Experience({
  position,
  project,
  front,
  back,
  design,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4">
      {position ? (
        <p className="">{`[ ${position} ]`}</p>
      ) : project ? (
        <div className="flex gap-1 align-middle justify-center items-center">
          {front ? (
            <span className="inline-block w-2 h-2 rounded-full bg-[#5D59D3] " />
          ) : null}
          {back ? (
            <span className="inline-block w-2 h-2 rounded-full bg-[#DC9150] " />
          ) : null}
          {design ? (
            <span className="inline-block w-2 h-2 rounded-full bg-[#DC5057] " />
          ) : null}

          <p className="">{`{ ${project} }`}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Experience;
