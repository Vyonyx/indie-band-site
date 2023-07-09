import Carousel from "./carousel";
import type { Album } from "./carousel";

export default function Home() {
  const albums: Album[] = [
    {
      title: "Shadow Moses",
      year: 2012,
      image: "https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    },
    {
      title: "Sempiternal",
      year: 2015,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: "Heaven and Hell",
      year: 2019,
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80',
    },
  ];

  return (
    <main className="">
      <h1 className="text-2xl">JamStack</h1>
      <Carousel albums={albums} />
    </main>
  );
}
