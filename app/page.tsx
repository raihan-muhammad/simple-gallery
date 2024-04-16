"use client";
import { Card, Navbar, PaddingContainer } from "@/components/common";
import { dummyData } from "@/dummyData";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex mt-[40px]">
        <PaddingContainer>
          <section className="columns-2 md:columns-4 gap-[20px] w-full">
            {dummyData.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </section>
        </PaddingContainer>
      </main>
    </>
  );
}
