import Image from "next/image";
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
  return (
    <>
      <section className="flex break-inside-avoid flex-col gap-[20px] mb-[20px]">
        <Image
          src={data.image}
          alt="Image Gallery"
          width={265}
          height={500}
          className="rounded-[16px] h-auto"
        />

        <h1 className="text-[16px] mb-[5px]">{data.title}</h1>
        <div className="flex gap-[5px]">
          <Image
            src="https://i.pravatar.cc/48?u=1"
            alt="Person"
            width={40}
            height={40}
            className="rounded-[50%]"
          />
          <p className="text-[14px]">{data.name}</p>
        </div>
      </section>
    </>
  );
}
