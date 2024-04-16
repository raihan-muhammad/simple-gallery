"use client";
import { Card, Navbar, PaddingContainer } from "@/components/common";
import { dummyData } from "@/dummyData";

export default function Home() {
  const user: any = localStorage.getItem("user");
  const userJSON = JSON.parse(user);

  return (
    <>
      <Navbar />
      <main className="flex">
        <PaddingContainer>
          {userJSON && (
            <h1 className="my-[40px] text-2xl">
              Selamat Datang, {userJSON?.displayName}!{" "}
            </h1>
          )}
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
