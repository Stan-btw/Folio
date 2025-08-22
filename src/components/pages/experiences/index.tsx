import Experience from "@/components/Experience";
import React from "react";

function Experiences() {
  return (
    <div className="min-w-[100vw] h-[100vh] flex items-center justify-center">
      <section className=" flex flex-col  px-10 font-satoshi gap-8 ">
        <div>
          <h1 className="text-6xl">Experiences</h1>
          <p>Sorem ipsum dolor sit amet</p>
        </div>
        {/* Grille à 3 colonnes */}
        <div className="grid grid-cols-3 gap-16 w-full max-w-6xl text-sm text-muted-foreground ">
          {/* 2023 */}
          <div className="flex flex-col gap-4  ">
            <p className=" font-medium text-foreground">2023</p>
            <Experience position="Frontend Trainer" />
            <Experience project="LPI" front />
            <Experience project="Gennevillers" front back />
            <Experience project="Piedra Sagrada" front back design />
          </div>

          {/* 2024 */}
          <div className="flex flex-col gap-4  ">
            <p className="font-medium text-foreground ">2024</p>
            <Experience position="Project Manager" />
            <Experience project="Mail Signature Editor" front back design />
          </div>

          {/* 2025 */}
          <div className="flex flex-col gap-4  ">
            <p className="font-medium text-foreground">2025</p>
            <Experience position="Freelance" />
            <Experience project="Seener" front back design />
          </div>
        </div>

        {/* Légende */}
        <div className="">
          <div className="flex items-center gap-4  ">
            <div className="flex gap-2 items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-[#5D59D3] " />
              <p>Frontend</p>

              <span className="inline-block w-2 h-2 rounded-full bg-[#DC9150] " />
              <p>Backend</p>

              <span className="inline-block w-2 h-2 rounded-full bg-[#DC5057] " />
              <p>Design</p>
            </div>
            <div className="flex flex">
              <p>{`[ Position ]  { Projects }`}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experiences;
