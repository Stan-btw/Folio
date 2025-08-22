import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Intro() {
  return (
    <div className="min-w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex w-full max-w-[700px] flex-col ">
        <h1 className="font-bold text-[50px]">Intro</h1>

        <Tabs defaultValue="about">
          <TabsList>
            <TabsTrigger value="about">
              <h2 className="text-[20px] ">About me</h2>
            </TabsTrigger>
            <TabsTrigger value="front">
              <h2 className="text-[20px]">Front End</h2>
            </TabsTrigger>
            <TabsTrigger value="design">
              <h2 className="text-[20px]">Design</h2>
            </TabsTrigger>
            <TabsTrigger value="back">
              <h2 className="text-[20px]">Back End</h2>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="">
            <p className="text-sm opacity-80 mt-4 ">
              I'm a frontend developer with a passion for clean interfaces and
              accessible code. With experience as a freelance dev, technical
              trainer, and web project manager, I've learned to adapt quickly
              and communicate clearly. I love guiding others, breaking down
              complex ideas, and building elegant user experiences. Whether in a
              classroom or on a codebase, I strive to combine technical depth
              with clarity and human sense.
            </p>
          </TabsContent>
          <TabsContent value="front">
            <p className="text-sm opacity-80 mt-4">
              My main stack includes React, TypeScript, and Tailwind CSS. I
              enjoy crafting reusable components, scalable design systems, and
              UI that feels light and intuitive. I put a strong focus on
              structure and maintainability, keeping my code readable and
              collaborative. I’m particularly drawn to dark themes, sharp
              typography, and minimalistic layouts that let the content breathe.
            </p>
          </TabsContent>
          <TabsContent value="design">
            <p className="text-sm opacity-80 mt-4">
              While I’m not a designer by title, I care deeply about visual
              balance and interaction. I often work with Figma to shape
              interfaces before coding, and I pay attention to spacing, rhythm,
              and subtle motion. My approach is rooted in clarity: clean
              typography, solid visual hierarchy, and interfaces that feel calm,
              deliberate, and human.
            </p>
          </TabsContent>
          <TabsContent value="back">
            <p className="text-sm opacity-80 mt-4">
              Though frontend is my main focus, I have hands-on experience with
              backend tools like Node.js, Express, Prisma, and both SQL and
              NoSQL databases. I can design clean, secure APIs, manage data
              models, and ensure backend services stay clear and easy to
              maintain. My goal is always the same: keep things simple,
              readable, and solid.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Intro;
