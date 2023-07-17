import Carousel from "./carousel";
import type { Album } from "./carousel";
import Container from '../components/container'
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
      image: 'https://media.pitchfork.com/photos/5b4e36a4dc6c142e533571c8/1:1/w_450%2Ch_450%2Cc_limit/Mac%2520Miller_Swimming.jpg',
    },
    {
      title: "Heaven and Hell",
      year: 2019,
      image: 'https://blog.dozmia.com/content/images/2019/01/Portrait-The-Weeknd.jpg',
    },
  ];

  return (
    <main className="">
      <h1 className="text-2xl">JamStack</h1>
      <Carousel albums={albums} />
    </main>
  );
}
