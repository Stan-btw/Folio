import React from "react";

function TechStack() {
  return (
    <div className="min-w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col ">
        <h1 className="font-bold text-[50px]">TechStack</h1>
        <div className="flex gap-7 ">
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-[20px] ">PocketShad</h2>
            <p>My basic techstack</p>
            <ul>
              <li>Nextjs</li>
              <li>Shadcn</li>
              <li>Pocketbase</li>
              <li>Tailwindcss</li>
            </ul>
          </div>
          {/* <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-[20px] ">Other tech i'm comfortable with</h2>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Express</li>
              <li>Prisma</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
