import React from "react";

interface folioItemProps {
  image?: string;
  index?: number;
  title: string;
}

export default function FolioItem(folioItemProps: folioItemProps) {
  const { image, index, title } = folioItemProps;
  return (
    <div>
      {image ? (
        <div className="w-[900px] h-[500px] bg-white rounded-lg shadow-md">
          <img src={image} alt="image" />
        </div>
      ) : (
        <div className="w-[900px] h-[500px] bg-white rounded-lg shadow-md"></div>
      )}
      <div className="flex gap-4 p-1 border-b">
        <h2>{`0${index}`}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}
