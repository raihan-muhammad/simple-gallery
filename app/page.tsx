"use client";
import { Card, Navbar, PaddingContainer } from "@/components/common";

export default function Home() {
  const dummyData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1712926362714-97ab56bd078a?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "avin",
      title: "Birds Procreate Illustration",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1711898048484-87a6c243eb67?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1711905866073-dc45d7af1aeb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1710244366153-716315e96a42?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1712926362714-97ab56bd078a?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "avin",
      title: "Birds Procreate Illustration",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1695576514502-cbc0a333f2d9?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1711898048484-87a6c243eb67?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1711905866073-dc45d7af1aeb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1710244366153-716315e96a42?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "giska",
      title: "The internet’s source for visuals",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="flex">
        <PaddingContainer>
          <section className="columns-4 gap-[20px] w-full">
            {dummyData.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </section>
        </PaddingContainer>
      </main>
    </>
  );
}
