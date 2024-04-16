"use client";
import { Card, Navbar, PaddingContainer } from "@/components/common";
import { dummyData } from "@/dummyData";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import NotFound from "@/assets/notfound.svg";

export default function Home() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const search = category !== null ? category : "general";
  const filteredData = dummyData.filter((item) => item.category === search);
  return (
    <>
      <Navbar />
      <main className="flex mt-[40px]">
        <PaddingContainer>
          {filteredData.length > 0 ? (
            <section className="columns-2 md:columns-4 gap-[20px] w-full">
              {filteredData.map((item, i) => (
                <Card key={i} data={item} />
              ))}
            </section>
          ) : (
            <section className="flex w-full items-center justify-center flex-col h-[80vh] gap-[50px]">
              <Image
                src={NotFound}
                width={200}
                height={200}
                alt="Empty State"
              />
              <h1 className="text-2xl relative top-0 left-0 right-0 bottom-0">
                Ayoo uploud fotonya disni ehehe
              </h1>
            </section>
          )}
        </PaddingContainer>
      </main>
    </>
  );
}
