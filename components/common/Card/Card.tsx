import Image from "next/image";
import { useState } from "react";

type Data = {
  id: number;
  image: string;
  name: string;
  title: string;
};

interface CardProps {
  data: Data;
}

export default function Card({ data }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <section
        className="flex break-inside-avoid relative flex-col gap-[15px] mb-[20px] cursor-pointer overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={data.image}
          alt="Image Gallery"
          width={265}
          height={500}
          className="rounded-[16px] h-auto"
        />
        <div
          className={`absolute w-full bottom-0 rounded-[16px] overflow-hidden transition-opacity transition-height duration-300 ease-in-out pt-[150px] p-[20px] bg-gradient-to-t from-black ${
            isHovered ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
        >
          <h1 className="text-[16px] mb-[10px] text-white">{data.title}</h1>
          <div className="flex gap-[8px] items-center">
            <Image
              src={`https://i.pravatar.cc/48?u=${data.id}`}
              alt="Person"
              width={30}
              height={30}
              className="rounded-[50%]"
            />
            <p className="text-[14px] text-white">{data.name}</p>
          </div>
        </div>
      </section>
    </>
  );
}
